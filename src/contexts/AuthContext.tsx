import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  logout: () => void;
}

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextProviderProps = {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;
  
        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      }
    });
  
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      });
    }
  }

  const logout = () => {
    signOut(auth);
    setUser(undefined);
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logout }}>
      { props.children }
    </AuthContext.Provider>
  )
}