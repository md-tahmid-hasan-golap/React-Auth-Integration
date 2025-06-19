import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Components/firebase/firebase.init";

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
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
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const userInfo = {
    user,
    loading,
    creatUser,
    signInUser,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
