import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth } from './firebase';
import { User } from 'firebase/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextType {
  currentUser: User | null | undefined;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export const AuthProvider: React.FC<{ children: ReactNode}> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = { currentUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
