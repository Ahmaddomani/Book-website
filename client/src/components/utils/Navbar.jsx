import { Link } from "react-router";
import logo from "../../assets/Book Icon.png";
import { useEffect, useState } from "react";

const navItems = [
  { link: "Home", path: "/" },
  { link: "About", path: "/about" },
  { link: "Shop", path: "/shop" },
  { link: "blog", path: "/blog" },
  { link: "Sale Book", path: "admin/dashboard" },
];

export const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenOpen, setMenuOpen] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) setSticky(true);
    else setSticky(false);
  });

  const closeOpenMenuFunc = () => {
    setMenuOpen(!isMenOpen);
  };

  useEffect(() => {}, []);

  return (
    <div
      className={`navbar z-[200] flex
         text-black bg-green-100
       justify-between px-10 py-5 shadow-md dark:darkClass  sticky top-0 items-center font-Roboto  ${
         isSticky && "shadow-md"
       }`}
    >
      <Link to="/" className="Logo flex justify-between items-center">
        <img src={logo} alt="Logo" width={50} />
        <h1 className="text-2xl  ">Book</h1>
      </Link>
      <ul className="links xs:hidden md:flex items-center">
        {navItems.map(({ link, path }, index) => {
          return (
            <Link
              key={index}
              className="m-2  text-xl  hover:text-blue-500 duration-50"
              to={path}
            >
              {link}
            </Link>
          );
        })}
      </ul>

      {/* Menu Bar Start */}
      <ul
        className={`absolute right-2 top-[90px]  w-48 bg-white border border-gray-200 rounded-2xl shadow-lg  flex-col py-2 z-50 ${
          isMenOpen ? "flex" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }, index) => (
          <Link
            key={index}
            to={path}
            className="px-4 py-2 text-lg text-gray-700 hover:bg-blue-500 hover:text-white rounded-lg transition "
          >
            {link}
          </Link>
        ))}
      </ul>
      {/* Menu Bar End */}

      {isMenOpen ? (
        <svg
          onClick={closeOpenMenuFunc}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6  md:hidden cursor-pointer duration-150 hover:text-red-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          onClick={closeOpenMenuFunc}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6  md:hidden cursor-pointer duration-150 hover:text-blue-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      )}
    </div>
  );
};
