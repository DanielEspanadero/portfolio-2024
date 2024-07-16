import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

export const MainRoutes = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};
