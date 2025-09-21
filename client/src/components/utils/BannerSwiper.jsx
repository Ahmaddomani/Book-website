import { useEffect, useRef, useState } from "react";
import { useBooks, usePage } from "../../context/BooksContext";
import { Loader } from "./Loader";
import { useNavigate } from "react-router";

export const BannerSwiper = ({ items, getMoreBookAfterEnd }) => {
  const [isAtEnd, setAtEnd] = useState(false);

  const { setBestBook } = useBooks();
  const { setPage } = usePage();
  const navigate = useNavigate();

  useEffect(() => {
    setBestBook(items);
  }, [items]);

  const container = useRef(null);
  const [viewOfContainer, setViewOfContainer] = useState(0);
  const [widthInnerView, setInnerView] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setInnerView(window.innerWidth);
  });
  // ? -------------------Scroll Behavior Function start -------------------
  const scrollToX = (dir) => {
    container.current.scrollBy({
      left:
        dir === "left"
          ? container.current?.offsetWidth
          : -container.current?.offsetWidth,
      behavior: "smooth",
    });
  };
  // ? -------------------Scroll Behavior Function end -------------------
  //
  return (
    <div
      className={`relative h-[500px] grid place-content-center dark:darkClass  `}
    >
      <svg
        onClick={() => scrollToX("right")}
        title="backward"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${
          container.current?.scrollLeft > 13 ? "block" : "hidden"
        } ${
          items.length === 0 && "hidden"
        } size-12 absolute top-[155px] z-50  dark:darkClass  duration-200 cursor-pointer  rounded-full p-2`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>

      <svg
        onClick={() => {
          scrollToX("left");
        }}
        title="forward"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={` ${
          viewOfContainer >= container?.current?.scrollWidth ||
          items.length === 0
            ? "hidden"
            : "block"
        } size-12 absolute top-[155px] right-4 z-50 dark:darkClass duration-200 cursor-pointer rounded-full p-2`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
      {items.length !== 0 ? (
        <div
          onScroll={() => {
            if (
              container.current.scrollLeft + container.current.clientWidth >=
              container?.current?.scrollWidth
            ) {
              if (getMoreBookAfterEnd) {
                if (!isAtEnd) setPage((prev) => prev + 1);
              }
              setAtEnd(true);
              // setLoading(true);
            } else {
              setAtEnd(false);
              // setLoading(false);
            }

            setViewOfContainer(
              container.current.clientWidth + container.current.scrollLeft
            );
          }}
          ref={container}
          // style={{ scrollbarWidth: "none" }}
          className="flex  gap-5 md:flex-row w-full overflow-auto relative overflow-y-hidden h-[500pxY
        Y] "
        >
          {items.map((book, index) => {
            return (
              <div
                onClick={() => navigate(`/books/${book._id}`)}
                key={index}
                className={` hover:bg-gray-700 dark:darkClass  xs:w-full p-4  cursor-pointer duration-150 flex-none`}
                style={{
                  width:
                    widthInnerView > 300 && widthInnerView < 800
                      ? "100%"
                      : "calc(25% - 20px)",
                }}
              >
                <img
                  className=" object-contain max-h-[250px] w-full"
                  src={book.photo}
                  alt="The Godfather"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                  <p className="text-gray-600 mb-2">{book.author}</p>
                  <p className="text-gray-500 text-sm">{book.publishYear}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
