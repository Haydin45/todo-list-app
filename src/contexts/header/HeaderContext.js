import React, { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const localStorageUsername = localStorage.getItem("username");

  const [element, setElement] = useState(Boolean(localStorageUsername));
  const [username, setUsername] = useState(
    !localStorageUsername ? "" : localStorageUsername
  );

  const handleAdd = () => {
    username && setElement(true);
    localStorage.setItem("username", username);
  };

  return (
    <HeaderContext.Provider
      value={{ element, setElement, username, setUsername, handleAdd }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
