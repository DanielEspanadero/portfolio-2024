import { useTranslation } from "react-i18next";
import { BookStyled } from "./BookStyled";

export const Book = () => {
    const { t } = useTranslation();

  return (
    <BookStyled>
      <h1 className="title">
        GUÍA PARA APRENDER A PROGRAMAR: Desde Cero Hasta tu Primer Empleo
      </h1>
      <div className="img-text-container">
        <img
          className="with-book"
          src="../../../public/images/guia para aprender a programar.jpg"
          alt="guía para aprender a programar"
        />
        <div className="text-container">
          <p className="why-buy">{t("why-buy")}</p>
          <p className="text-book">
            {t("book-page-text")}
          </p>
        </div>
      </div>
      <div className="btn-container">
        <a
          className="fancy"
          href="https://www.amazon.es/GU%C3%8DA-PARA-APRENDER-PROGRAMAR-Primer/dp/B0CRPPD8CJ"
          target="_BLANK"
        >
          <span className="top-key"></span>
          <span className="text">{t("buy-now")}</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
      </div>
      <p className="score">
        {t("rate")}
      </p>
    </BookStyled>
  );
};
