import { useEffect, useRef, useState } from "react";
import { NavbarStyled } from "./NavbarStyled"
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleInputVisibility = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsInputVisible((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsInputVisible(false);
    }
  };

  useEffect(() => {
    if (isInputVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isInputVisible]);

  return (
    <NavbarStyled>
      <div className="container left-container"></div>
      <div className="container right-container">
        <button className="btn" onClick={toggleInputVisibility}>
          <img src="/public/images/oimenu.svg" alt="settings" />
        </button>
      </div>
      {isInputVisible && (
        <div className="input" ref={menuRef}>
          <Link
            className={`value ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Portfolio
          </Link>
          <Link
            className={`value ${
              location.pathname === "/courses" ? "active" : ""
            }`}
            to="/courses"
          >
            Courses
          </Link>
          <Link
            className={`value ${location.pathname === "/book" ? "active" : ""}`}
            to="/book"
          >
            Book
          </Link>
        </div>
      )}
    </NavbarStyled>
  );
}
