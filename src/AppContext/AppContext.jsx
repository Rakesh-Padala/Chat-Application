import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { createContext, useState } from "react";
import { auth, db } from "../Backend/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [chatData, setChatData] = useState(null);

  const loadUserData = async (uid) => {
    try {
      const userRef = doc(db, "users", uid);
      const userSnapShot = await getDoc(userRef);
      const userData = userSnapShot.data();
      setUserData(userData);
      if (userData.avatar && userData.bio) {
        navigate("/chat");
      } else {
        navigate("/profile-update");
      }

      setInterval(async () => {
        if (auth.chatUser) {
          await updateDoc(userRef, {
            lastseen: Date.now(),
          });
        }
      }, 60000);
      // console.log(userData)
    } catch (error) {
      toast.error(error);
    }
  };
  const value = {
    userData,
    setUserData,
    chatData,
    setChatData,
    loadUserData,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
