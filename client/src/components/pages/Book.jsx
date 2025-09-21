import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

export const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/v1/books/${id}`);
        setBook(res.data.data);
      } catch {
        setBook(null);
      }
    };
    fetchBook();
  }, [id]);

  // دالة محاكاة لإضافة الكتاب إلى السلة
  const handleAddToCart = () => {
    setIsAddingToCart(true);
    // محاكاة عملية إضافة إلى السلة
    setTimeout(() => {
      setIsAddingToCart(false);
      alert(`${book.title} added to cart successfully!`);
    }, 1000);
  };

  if (!book)
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-400 text-lg dark:bg-gray-900 dark:text-gray-300">
        <div className="animate-pulse">Loading book data...</div>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="md:w-2/5 p-6 flex items-center justify-center bg-gray-50 dark:bg-gray-700">
          <img
            src={book.photo}
            alt={book.title}
            className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
          />
        </div>

        <div className="md:w-3/5 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              {book.title}
            </h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">
              by {book.author}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200">
                {book.publishYear}
              </span>
              <span className="bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">
                {Array.isArray(book.genres)
                  ? book.genres.join(", ")
                  : book.genres}
              </span>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Description
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {book.description}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                isAddingToCart
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isAddingToCart ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Adding to Cart...
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
