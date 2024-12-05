import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.confige";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //handle register
  const handleRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // handle login 
  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  } 

  const handleLogout = () => {
    setLoading(true)
    return signOut(auth);
  };

  //manage profile
  const manageProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  
  // loginWithGoogle
  const handleGoogleLogin = () => {
    setLoading(true)
    signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    handleGoogleLogin,
    handleRegister,
    handleLogin,
    handleLogout,
    manageProfile,
    user,
    setUser,
    loading,
  };

  useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
        if(currentUser){
            setUser(currentUser)
        }
        else{
            setUser(null)
        }
        setLoading(false)
    })
    return ()=> unSubscribe()
  }, [])
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
