import { createContext, useContext, useState } from "react";

export const BooksContext = createContext();
export const pageContext = createContext();
export const LoginContext = createContext();

export const BookProvider = ({ children }) => {
  const [bestBook, setBestBook] = useState([]);
  return (
    <BooksContext.Provider value={{ bestBook, setBestBook }}>
      {children}
    </BooksContext.Provider>
  );
};
export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  return (
    <pageContext.Provider value={{ page, setPage }}>
      {children}
    </pageContext.Provider>
  );
};

export const LoginProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);
  return (
    <LoginContext.Provider value={{ isLogin, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
export const usePage = () => useContext(pageContext);
export const useLogin = () => useContext(LoginContext);
