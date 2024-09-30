import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHtaK7gPklJLvAjVhS0CJMlVAXWWLL-FQ",
  authDomain: "login-testing-58708.firebaseapp.com",
  projectId: "login-testing-58708",
  storageBucket: "login-testing-58708.appspot.com",
  messagingSenderId: "846100853764",
  appId: "1:846100853764:web:09b007a2ef2c88d2dc3151",
  measurementId: "G-6RTY5XB6H9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Cant talk, chat only",
      lastseen: Date.now()
    });
    await setDoc(doc(db, "chats", user.uid), {
      chatData: []
    });
  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = async () => {
  try {
    await signOut(auth)
  }
  catch(error) {
    toast.error(error)
  }
}

export { db,auth, signup, app, login,logout };
