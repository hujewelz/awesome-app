const { useState, useEffect } = require("react");
const { auth, db } = require("./firebase");

export const useUserStatus = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const profile = doc.data();
            setUser({ ...user, ...profile });
          }
        });
    });
  }, []);

  return user;
};
