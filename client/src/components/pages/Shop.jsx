import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Loader } from "../utils/Loader";
import { useNavigate } from "react-router";

export const Shop = () => {
  const booksWrapper = useRef(null);
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [loadingNewBook, setLoadingNewBooks] = useState(false);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  // Get Books Function
  const getBooks = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/books/?page=${page}`,
        {
          withCredentials: true,
        }
      );
      console.log(response.data.data);
      setBooks([...books, ...response.data.data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingNewBooks(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, [page]);

  booksWrapper.current?.addEventListener("scroll", () => {
    if (
      booksWrapper.current?.scrollTop + booksWrapper.current?.clientHeight >=
      booksWrapper.current?.scrollHeight
    ) {
      setLoadingNewBooks(true);
      setPage(page + 1);
    }
  });

  return (
    <div className={`dark:darkClass min-h-screen text-center `}>
      {isLoading ? (
        <Loader heightFull={true} />
      ) : (
        <div
          ref={booksWrapper}
          className={`  p-4 grid place-items-center h-screen text-center  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-4 overflow-auto`}
        >
          {books.map((book, index) => {
            return (
              <div
                onClick={() => navigate(`/books/${book._id}`)}
                key={index}
                className={` dark:darkClass w-full h-[400px] hover:bg-gray-600 rounded border border-gray-600 p-2  `}
              >
                <img
                  className="w-full object-contain h-[200px] "
                  src={book.photo}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {book.title.length > 30
                      ? `${book.title.slice(0, 30)}...`
                      : book.title}
                  </div>
                  <p className=" text-base">{book.author}...</p>
                  <p className="text-base flex justify-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 mx-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    {book.rating}
                  </p>
                </div>
                {/* <div className="mt-3 flex max-w-full overflow-auto">
                {book.genres?.map((genre, index) => {
                  return (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {genre}
                    </span>
                  );
                })}
              </div> */}
              </div>
            );
          })}
        </div>
      )}
      {loadingNewBook && <Loader heightFull={true} />}
    </div>
  );
};
