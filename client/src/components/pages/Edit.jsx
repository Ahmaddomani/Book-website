import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

import axios from "axios";

import { AuthCheck } from "../../Dashboard/Authcheck";

export const Edit = () => {
  const { id } = useParams();
  const pError = useRef("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    author: "",
    publishYear: "",
    rating: "",
    photo: "",
    language: "",
    pages: "",
    genres: [],
  });

  const bookTypes = [
    "Fantasy",
    "Science Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Horror",
    "Historical",
    "Biography",
    "Self-Help",
    "Philosophy",
    "Poetry",
    "Adventure",
    "Graphic Novel",
    "Classic",
    "Young Adult",
  ];

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/books/${id}`
        );
        const bookData = response.data.data;
        setForm({
          title: bookData.title || "",
          description: bookData.description || "",
          author: bookData.author || "",
          publishYear: bookData.publishYear || "",
          rating: bookData.rating || "",
          photo: bookData.photo || "",
          language: bookData.language || "",
          pages: bookData.pages || "",
          genres: bookData.genres || [],
        });
      } catch (error) {
        pError.current.textContent =
          error.response?.data?.message || "Failed to load book data";
      }
    };

    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    pError.current.textContent = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/v1/books/${id}`,
        form,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      alert("Book updated successfully!");
      // يمكنك إضافة redirect هنا إذا أردت
    } catch (error) {
      pError.current.textContent =
        error.response?.data?.message || "An error occurred";
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthCheck>
      <div
        className={`min-h-screen py-8 px-4 flex items-center justify-center dark:darkClass `}
      >
        <div
          className={`rounded-xl shadow-xl p-6 w-full max-w-md dark:bg-gray-800 dark:text-slate-100`}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
            Edit Book
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                name="title"
                placeholder="Book Title"
                value={form.title}
                onChange={handleChange}
                required
                className={`w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-gray-50 border-gray-300 text-gray-800 } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div>
              <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                required
                className={`w-full p-3 rounded-lg border resize-none h-24 dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-gray-50 border-gray-300 text-gray-800 } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div>
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={form.author}
                onChange={handleChange}
                required
                className={`w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-gray-50 border-gray-300 text-gray-800 } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="number"
                  name="publishYear"
                  placeholder="Publish Year"
                  value={form.publishYear}
                  onChange={handleChange}
                  required
                  min="1000"
                  max="2025"
                  className={`w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-gray-50 border-gray-300 text-gray-800 } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>

              <div>
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating (1-5)"
                  value={form.rating}
                  min={1}
                  max={5}
                  step={0.1}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-gray-50 border-gray-300 text-gray-800 } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
            </div>

            <div>
              <input
                type="url"
                name="photo"
                placeholder="Photo URL"
                value={form.photo}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-gray-50 border-gray-300 text-gray-800 } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div>
              <select
                name="genres"
                value={form.genres}
                onChange={handleChange}
                required
                className={`w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-gray-50 border-gray-300 text-gray-800 } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="">Select Genre</option>
                {bookTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="language"
                  placeholder="Language"
                  value={form.language}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-gray-50 border-gray-300 text-gray-800 } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>

              <div>
                <input
                  type="number"
                  name="pages"
                  placeholder="Pages"
                  value={form.pages}
                  onChange={handleChange}
                  min="1"
                  className={`w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-gray-50 border-gray-300 text-gray-800 } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
            </div>

            <p
              ref={pError}
              className="text-center text-red-500 font-medium mt-2 min-h-6"
            ></p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => window.history.back()}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-600 dark:darkClass`}
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 py-3bg-blue-500 hover:bg-blue-600 px-4 rounded-lg text-white font-semibold transition-all flex items-center justify-center dark:bg-blue-600 dark:hover:hover:bg-blue-700 ${
                  isSubmitting && "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                    Updating...
                  </>
                ) : (
                  "Update Book"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthCheck>
  );
};
