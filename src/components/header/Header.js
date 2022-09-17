import React from "react";
import { useHeader } from "../../contexts/header/HeaderContext";

const Header = () => {
  const { element, setElement, username, setUsername, handleAdd } = useHeader();

  return (
    <>
      <span className="header">
        {element ? (
          <span
            title="Click here to change username"
            onClick={() => setElement(false)}
          >
            {username}
            {username && (username[username.length - 1] === "s" ? "' " : "'s ")}
            ToDos
          </span>
        ) : (
          <input
            title="Click here to add username"
            type="text"
            value={username}
            placeholder="Click for username"
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => handleAdd()}
            onKeyUp={(e) => e.key === "Enter" && handleAdd()}
          />
        )}
      </span>
    </>
  );
};

export default Header;
