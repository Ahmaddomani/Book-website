import { Route, Routes } from "react-router";
import { About } from "./components/pages/About";
import { Shop } from "./components/pages/Shop";
import { Blog } from "./components/pages/Blog";
import { Navbar } from "./components/utils/Navbar";
import { Home } from "./components/Home/Home";
import { Book } from "./components/pages/book";
import { Footer } from "./components/utils/Footer";
import { DashboardLayout } from "./Dashboard/DashboardLayout";
import { Notfound } from "./components/pages/Notfound";
import { Upload } from "./Dashboard/upload";
import { ManageBooks } from "./Dashboard/ManageBooks";
import { Login } from "./auth/Login";
import Signup from "./auth/Signup";
import { Edit } from "./components/pages/Edit";
import { DashBoard } from "./Dashboard/DashBoard";

function App() {
  // ScrollToTop Function
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  // const [scrollY, setScrollY] = useState(0);

  // window.addEventListener("scroll", () => setScrollY(window.scrollY));
  return (
    <div className={`App relative dark:darkClass  `}>
      <svg
        onClick={scrollToTop}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`size-10 ${
          scrollY == 0 ? "hidden" : "block"
        } fixed z-[1000] p-2 cursor-pointer  bg-blue-200 hover:bg-blue-300 right-7 rounded-full top-[85vh] bottom-0`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="books/:id" element={<Book />} />
        <Route path="books/edit/:id" element={<Edit />} />
        <Route path="/admin/dashboard" element={<DashboardLayout />}>
          <Route path="upload" element={<Upload />} />
          <Route index element={<DashBoard />} />
          <Route path="manage" element={<ManageBooks />} />
        </Route>
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/signup" element={<Signup />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
