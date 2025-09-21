import { useState } from "react";
import CardsSwiper from "../utils/Swipper";
import axios from "axios";
import { Loader } from "../utils/Loader";


export const Landing = () => {
  const [searchBooks, setSearchBook] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchLoader, setSearchLoader] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  

  // Function To Search On Books
  const valueSearchHandler = (e) => {
    setSearchBook([]);
    setValueSearch(e.currentTarget.value);
    setIsSearching(false);
  };

  const getBooksOnSearch = async () => {
    if (valueSearch !== "") {
      try {
        setSearchLoader(true);
        const response = await axios.get(
          `http://localhost:3000/api/v1/books/search?search=${valueSearch}`,
          { withCredentials: true }
        );
        setSearchBook(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setSearchLoader(false);
      }
    }
  };

  return (
    <div
      className={`flex bg-green-100 xl:flex-row xs:flex-col-reverse dark:darkClass  custom-padding $`}
    >
      <div className="texts mt-10 xl:w-1/2 text-center xl:text-start  w-full flex flex-col justify-center ">
        <h1 className="xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight font-bold mb-10">
          Buy and Sell Your Books{" "}
          <span className="text-blue-700">for the Best Prices</span>
        </h1>
        <p className=" xs:text-[20px] xl:text-2xl leading-loose mb-8">
          Discover thousands of books from various genres and connect with
          fellow book lovers. Sell your old books or find the perfect read at
          unbeatable prices. Start your literary journey today!
        </p>
        <div className="h-[50px] xs:w-fit md:w-[350px] flex xs:mx-auto xl:mx-0 relative">
          <input
            value={valueSearch}
            onChange={valueSearchHandler}
            type="text"
            name="search"
            id="search"
            placeholder="Search a Book"
            className="outline-none h-full  indent-3 flex-1 "
          />
          <button
            onClick={() => {
              setIsSearching(true);
              getBooksOnSearch();
            }}
            className="p-3 h-full bg-blue-700 text-white"
          >
            Search
          </button>
          <div
            className={` dark:darkClass search-popup max-h-[500px] shadow-lg overflow-y-auto p-4 mt-1 break-words   top-[50px] absolute w-full z-30 ${
              isSearching ? "block" : "hidden"
            }`}
          >
            {searchBooks.length > 0 ? (
              searchBooks.map((book) => {
                return (
                  <div
                    className={`w-full dark:border-gray-600 border   my-4 flex items-center gap-2  p-2`}
                  >
                    <img src={book.photo} alt="" width={50} height={50} />
                    <h3>{book.title}</h3>
                  </div>
                );
              })
            ) : searchLoader ? (
              <Loader />
            ) : (
              "No Books Found"
            )}
            {/* Close Search Bar Start  */}
            <svg
              onClick={() => setIsSearching(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6  cursor-pointer absolute top-0 right-1 duration-150 hover:text-red-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            {/* Close Search Bar End  */}
          </div>
        </div>
      </div>
      <CardsSwiper />
    </div>
  );
};
