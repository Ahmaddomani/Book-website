import axios from "axios";
import { useEffect, useState } from "react";
import { useLogin } from "../context/BooksContext";
import Unauth from "../components/utils/Unauth";
import { Loader } from "../components/utils/Loader";

export const AuthCheck = ({ children }) => {
  const { isLogin, setLogin } = useLogin();
  const [loader, setLoader] = useState(true);

  const check = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/auth/checkAuth",
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) setLogin(true);
    } catch (error) {
      console.log(error);
      setLogin(false);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    check();
  });
  return loader ? (
    <Loader heightFull={true} />
  ) : isLogin ? (
    children
  ) : (
    <Unauth />
  );
};
