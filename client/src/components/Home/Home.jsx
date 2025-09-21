import { useEffect, useState } from "react";
import axios from "axios";
import { BannerSwiper } from "../utils/BannerSwiper";
import { FavBook } from "./FavBook";
import { PromoBanner } from "./PromoBanner";
import { usePage } from "../../context/BooksContext";
import { Header } from "../utils/Header";
import Testimonials from "./Testimonials";
import { Landing } from "./Landing";

export const Home = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [bestSallerBooks, setBestSallerBooks] = useState([]);
  const { page, setPage } = usePage();

  // ? ========================create Get Books Functions Start =================
  const getBestBooks = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/books/?page=${page}&rating[gte]=4.3`,
        {
          withCredentials: true,
        }
      );
      setBestSallerBooks(
        [...bestSallerBooks, ...response.data.data].slice(0, 10)
      );
    } catch (error) {
      console.log(error);
      //   setError(error);
    }
  };

  const getAllBooks = async () => {
    console.log(page);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/books/?page=${page}`,
        {
          withCredentials: true,
        }
      );
      setAllBooks([...allBooks, ...response.data.data]);
    } catch (error) {
      console.log(error);
      //   setError(error);
    }
  };

  // ? ========================create Get Books Functions End =================

  useEffect(() => setPage(1), []);

  //!----------------------------------------------------
  useEffect(() => {
    getBestBooks();
    getAllBooks();
  }, [page]);
  //! ----------------------------------------------------

  //? ----------------------------------------------------

  //   if (error?.response?.status === 401) return <Unauthorized />;
  //   if (loading) return <Spinner />;
  //   if (error) return <NetworkError />;

  return (
    // ----------------------Grand Parents Div Start----------------------------
    <div>
      {/*------------------------- Home Div Start ---------------------- */}
      <Landing />

      {/* Best Seller Book Start-  */}
      <Header HeaderText={" Best Sellers Books"}>
        <BannerSwiper items={bestSallerBooks} getMoreBookAfterEnd={false} />
      </Header>

      {/* FavBook Div Section Start   */}
      <FavBook />

      {/* PromoBanner Div Section Start */}
      <PromoBanner />

      {/*Other Books Section Start  */}
      <Header HeaderText={"Other Books"}>
        <BannerSwiper items={allBooks} getMoreBookAfterEnd={true} />
      </Header>

      {/*Our Customers Start   */}
      <Header HeaderText={"Our Customers"}>
        <Testimonials />
      </Header>
    </div>
  );
};

//? ----------------------------------------------------
