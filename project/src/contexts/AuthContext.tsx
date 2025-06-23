import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('interview-prep-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    // Mock authentication - in real app, this would be Supabase auth
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      created_at: new Date().toISOString(),
    };
    setUser(mockUser);
    localStorage.setItem('interview-prep-user', JSON.stringify(mockUser));
  };

  const signUp = async (email: string, password: string, name: string) => {
    // Mock authentication - in real app, this would be Supabase auth
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      name,
      created_at: new Date().toISOString(),
    };
    setUser(mockUser);
    localStorage.setItem('interview-prep-user', JSON.stringify(mockUser));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('interview-prep-user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};