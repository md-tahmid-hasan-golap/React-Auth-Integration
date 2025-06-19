import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Components/firebase/firebase.init";

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   onAuthStateChanged(auth, (crueentUser) => {
  //     if (crueentUser) {
  //       console.log("has crueentUser ", crueentUser);
  //     } else {
  //       console.log(crueentUser);
  //     }
  //   });

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (crueentUser) => {
      console.log(crueentUser);
      setUser(crueentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const userInfo = {
    user,
    creatUser,
    signInUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
