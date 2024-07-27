import { useEffect, useRef, useState } from "react";
import { NavbarStyled } from "./NavbarStyled";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
   const [isInputVisible, setIsInputVisible] = useState(false);
   const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] =
     useState(false);
   const menuRef = useRef<HTMLDivElement>(null);
   const languageMenuRef = useRef<HTMLDivElement>(null);
   const location = useLocation();
   const { i18n, t } = useTranslation();

   const toggleInputVisibility = (event: React.MouseEvent) => {
     event.stopPropagation();
     if (!isInputVisible) {
       setIsLanguageDropdownVisible(false);
     }
     setIsInputVisible((prevState) => !prevState);
   };

   const toggleLanguageDropdownVisibility = (event: React.MouseEvent) => {
     event.stopPropagation();
     if (!isLanguageDropdownVisible) {
       setIsInputVisible(false);
     }
     setIsLanguageDropdownVisible((prevState) => !prevState);
   };

   const handleClickOutside = (event: MouseEvent) => {
     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
       setIsInputVisible(false);
     }
     if (
       languageMenuRef.current &&
       !languageMenuRef.current.contains(event.target as Node)
     ) {
       setIsLanguageDropdownVisible(false);
     }
   };

   useEffect(() => {
     if (isInputVisible || isLanguageDropdownVisible) {
       document.addEventListener("click", handleClickOutside);
     } else {
       document.removeEventListener("click", handleClickOutside);
     }

     return () => {
       document.removeEventListener("click", handleClickOutside);
     };
   }, [isInputVisible, isLanguageDropdownVisible]);

   const changeLanguage = (lng: string) => {
     i18n.changeLanguage(lng);
     setIsLanguageDropdownVisible(false);
   };

  return (
    <NavbarStyled>
      <div className="container left-container">
        <button className="btn" onClick={toggleLanguageDropdownVisibility}>
          <img src="../../../public/images/lang-icon.png" alt="settings" />
        </button>
      </div>
      {isLanguageDropdownVisible && (
        <div className="input-language" ref={languageMenuRef}>
          <button className="value" onClick={() => changeLanguage("en")}>
            {t("english")}
          </button>
          <button className="value" onClick={() => changeLanguage("es")}>
            {t("spanish")}
          </button>
        </div>
      )}

      <div className="container right-container">
        <button className="btn" onClick={toggleInputVisibility}>
          <img src="../../../public/images/oimenu.svg" alt="settings" />
        </button>
      </div>
      {isInputVisible && (
        <div className="input" ref={menuRef}>
          <Link
            className={`value ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            {t("portfolio")}
          </Link>
          <Link
            className={`value ${
              location.pathname === "/courses" ? "active" : ""
            }`}
            to="/courses"
          >
            {t("courses")}
          </Link>
          <Link
            className={`value ${location.pathname === "/book" ? "active" : ""}`}
            to="/book"
          >
            {t("book")}
          </Link>
        </div>
      )}
    </NavbarStyled>
  );
};
