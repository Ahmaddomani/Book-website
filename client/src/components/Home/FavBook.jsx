import { useBooks } from "../../context/BooksContext";
export const FavBook = () => {
  let { bestBook } = useBooks();

  bestBook = bestBook.slice(0, 10);
  return (
    <div
      className={` dark:darkClass bg-green-100 custom-padding flex  gap-10 xs:flex-wrap lg:flex-nowrap`}
    >
      {/*-------------- Wrapper Image Start--------------  */}
      <div className="  Image-thumbnails-wrapper xs:w-full lg:w-[45%] p-2  grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))]  bg-yellow-800 gap-2">
        {bestBook.map((book, index) => (
          <img
            key={index}
            src={book.photo}
            alt={book.title}
            className=" object-fill w-full h-[200px] best-img-thumbnail  "
          />
        ))}
      </div>
      {/*-------------- Wrapper Image End--------------  */}
      {/* Text start  */}
      <div className="Text-wrapper xs:w-full lg:w-[55%] p-[50px] item ">
        <h2 className="text-5xl font-semibold mb-8">
          Find Your Favorite <span className="text-blue-700">Book Here!</span>
        </h2>
        <p className="text-gray-600 mb-5">
          Discover a world of knowledge and adventure with our curated selection
          of books. From timeless classics to the latest bestsellers, our
          collection offers something for every reader. Dive into stories that
          inspire, educate, and entertain, and connect with a community of
          passionate book lovers.
        </p>
        <div className=" w-fit mx-auto flex  gap-4 border  ">
          <div className=" readers flex flex-col text-center  border-r p-2">
            <h4 className="text-2xl font-bold">800+</h4>
            <span className="block">Book Readers</span>
          </div>
          <div className=" registers flex flex-col text-center   border-r p-2 ">
            <h4 className="text-2xl font-bold">550+</h4>
            <span className="block">Register User</span>
          </div>
          <div className=" downloads flex flex-col  text-center   border-r p-2  ">
            <h4 className="text-2xl font-bold">1200+</h4>
            <span className="block">PDF Downloads</span>
          </div>
        </div>
        <button className="block mt-4 text-white mx-auto bg-blue-700 p-2 rounded-sm hover:bg-black duration-150">
          Explore More
        </button>
      </div>
      {/* Text End  */}
    </div>
  );
};
