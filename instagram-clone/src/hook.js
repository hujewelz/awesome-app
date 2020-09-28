const { useState, useEffect } = require("react");
const { auth, db } = require("./firebase");

export const useUserStatus = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged((user) => {
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          setLoading(false);
          if (doc.exists) {
            const profile = doc.data();
            setUser({ ...user, ...profile });
          }
        })
        .catch((error) => setLoading(false));
    });
  }, []);

  return [user, loading];
};
