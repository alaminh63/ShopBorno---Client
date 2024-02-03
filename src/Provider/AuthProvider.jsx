import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../Firebase/firebase.config.js";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (correntUser) => {
      setUser(correntUser);
      if (correntUser) {
        fetch(
          `https://fiber-music-camp-server.vercel.app/jwt?email=${correntUser.email}`,
          {
            method: "POST",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("access-token", data.token);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    signUp,
    signInGoogle,
    login,
    logout,
    loading,
    auth,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
