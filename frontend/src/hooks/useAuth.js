import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const token = localStorage.getItem("login")
    ? localStorage.getItem("login")
    : null;
  useEffect(() => {
    if (token) {
      setIsAuth(true);
    }
  }, []);

  return isAuth && [isAuth, token];
};

export default useAuth;
