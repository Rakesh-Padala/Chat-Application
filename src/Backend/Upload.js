import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "firebase/storage";
  
  const upload = (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);
  
      // Ensure the correct MIME type is being used
      const metadata = {
        contentType: file.type, // This sets the content type to the type of the file
      };
  
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.error("Upload failed:", error);
          reject(error); // Reject the promise in case of an error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log("File available at", downloadURL);
              resolve(downloadURL); // Resolve with the download URL
            })
            .catch((error) => {
              console.error("Failed to get download URL:", error);
              reject(error); // Reject if download URL retrieval fails
            });
        }
      );
    });
  };
  
  export default upload;
  