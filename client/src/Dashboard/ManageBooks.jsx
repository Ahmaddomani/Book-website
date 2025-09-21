import { AuthCheck } from "./Authcheck";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../components/utils/Loader";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export const ManageBooks = () => {
  const [page, setPage] = useState(1);
  const [loadingNewBook, setLoadingNewBooks] = useState(false);
  const [books, setBooks] = useState([]);
  const [booksLength, setBooksLength] = useState(0);
  const navigate = useNavigate();

  // Get Books Function
  const getBooks = async () => {
    try {
      setLoadingNewBooks(true);
      const response = await axios.get(
        `http://localhost:3000/api/v1/books/?page=${page}`,
        {
          withCredentials: true,
        }
      );
      setBooksLength(response.data.data.length);
      setBooks([...books, ...response.data.data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingNewBooks(false);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/api/v1/books/${id}`, {
            withCredentials: true,
          });
          setBooks((books) => books.filter((book) => book._id !== id));
        } catch (error) {
          console.log(error);
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    getBooks();
  }, [page]);

  return (
    <AuthCheck>
      <div class="relative flex flex-col w-full h-full overflow-y-scroll text-slate-300 bg-slate-800 shadow-md rounded-lg bg-clip-border">
        <table class="w-full text-left table-auto  overflow-y-auto">
          <thead>
            <tr>
              <th class="p-4 border-b border-slate-600 bg-slate-700 w-[250px]">
                <p class="text-sm font-normal leading-none text-slate-300">
                  Photo
                </p>
              </th>
              <th class="p-4 border-b border-slate-600 bg-slate-700 w-[250px]">
                <p class="text-sm font-normal leading-none text-slate-300">
                  Book Title
                </p>
              </th>

              <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class="text-sm font-normal leading-none text-slate-300">
                  Author
                </p>
              </th>
              <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class="text-sm font-normal leading-none text-slate-300">
                  Publish Year
                </p>
              </th>
              <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class="text-sm font-normal leading-none text-slate-300">
                  Genres
                </p>
              </th>
              <th class="p-4 border-b border-slate-600 bg-slate-700">
                <p class="text-sm font-normal leading-none text-slate-300">
                  Operations
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              return (
                <tr
                  key={index}
                  class="hover:bg-slate-700 max-h-[75px] overflow-auto"
                >
                  <td class="p-4 border-b border-slate-700 bg-slate-900  ">
                    <img
                      alt={book.title}
                      src={book.photo}
                      width={50}
                      height={50}
                      class="text-sm text-slate-100 font-semibold mx-auto "
                    />
                  </td>
                  <td class="p-4 border-b border-slate-700 bg-slate-900 ">
                    <p class="text-sm text-slate-100 font-semibold  ">
                      {book.title}
                    </p>
                  </td>
                  <td class="p-4 border-b border-slate-700 bg-slate-800">
                    <p class="text-sm text-slate-300"> {book.author}</p>
                  </td>
                  <td class="p-4 border-b border-slate-700 bg-slate-900">
                    <p class="text-sm text-slate-300">{book.publishYear}</p>
                  </td>
                  <td class="p-4 border-b border-slate-700 bg-slate-800">
                    {book.genres.map((genre, index) => {
                      return (
                        <p
                          key={index}
                          className="m-2 border p-2 rounded-full text-[14px] inline-block"
                        >
                          {genre}
                        </p>
                      );
                    })}
                  </td>
                  <td class="p-4 border-b border-slate-700 bg-slate-800 ">
                    {/* Delete Start */}
                    <svg
                      onClick={() => {
                        handleDelete(book._id);
                      }}
                      title="Delete"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 hover:text-rose-500 cursor-pointer mx-2 inline-block relative"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                      <span className="delete absolute text-[10px] border rounded-full top-0 bg-red-500">
                        delete
                      </span>
                    </svg>
                    {/* Delete End */}
                    {/* Edit Start  */}
                    <svg
                      onClick={() => {
                        navigate(`/books/edit/${book._id}`);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 hover:text-cyan-500 cursor-pointer mx-2 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>
                    {/* Edit End  */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {booksLength > 0 && (
          <div
            onClick={() => setPage(page + 1)}
            className="text-center mx-auto my-2 border w-fit p-2 rounded-full cursor-pointer hover:bg-gray-700  "
          >
            {loadingNewBook ? <Loader /> : "Load More"}
          </div>
        )}
      </div>
    </AuthCheck>
  );
};
