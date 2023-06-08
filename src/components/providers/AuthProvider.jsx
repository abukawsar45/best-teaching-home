import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from './../../Firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword (auth,email,password)
  }

    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
  };
  
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
  };
   const logOut = () => {
     setLoading(true);
     signOut(auth);
  };
  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged((auth, currentUser)=> {
  setUser(currentUser);
  setLoading(false)
    })
    return () => {
      return unSubscribe()
    }
    
  },[])
  

  const authInfo = {
    user,
    setUser,
    loading,
    loginWithEmail,
    signUpWithEmail,
    updateUserProfile,
    loginWithGoogle,
    logOut,
  };
  return (
    <AuthProvider.provider value={authInfo}>
      {children}
    </AuthProvider.provider>
  );
};

export default AuthProvider;