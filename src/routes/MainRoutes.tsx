import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { Courses } from "../pages/courses/Courses";
import { Book } from "../pages/book/Book";

export const MainRoutes = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/book" element={<Book />} />

          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};
