const { useState, useEffect } = require("react");
const { auth } = require("./firebase");

export const useUserStatus = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("user: ", JSON.stringify(user));
      setUser(user);
    });
  }, []);

  return user;
};
