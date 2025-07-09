import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).userid : null;
  });

  const [username, setUsername] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).username : null;
  });

  useEffect(() => {
    // Update localStorage when userId or username changes
    if (userId && username) {
      localStorage.setItem(
        "user",
        JSON.stringify({ userid: userId, username })
      );
    } else {
      localStorage.removeItem("user");
    }
  }, [userId, username]);

  return (
    <UserContext.Provider value={{ userId, setUserId, username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserContext;
