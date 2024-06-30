// contexts/UserContext.tsx

import React, { createContext, useState, ReactNode, FC } from 'react';

// Define the shape of the context
interface UserContextType {
  username: string;
  setUsername: (username: string) => void;
}

// Create the context with a default value
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Create the provider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string>('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
