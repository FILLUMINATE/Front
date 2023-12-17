import React, {
    createContext,
    useContext,
    ReactNode,
    Dispatch,
    SetStateAction,
  } from "react";
import { useState } from "react";
  
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    return (
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
      </UserContext.Provider>
    );
  };
  

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
