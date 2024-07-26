import { CardSkill } from "../../components/card-skill/CardSkill";
import { HomeStyled } from "./HomeStyled";
import skills from "../../jsons/skills.json";
import experiences from "../../jsons/experiences.json";
import { Experience } from "../../components/experience/Experience";
import sendEmail from "../../config/sendEmail";
import projects from "../../jsons/projects.json";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <HomeStyled>
      <div className="presentation">
        <div className="text-container">
          <h1>
            {t("hey")} <span className="greeting">👋</span> {t("i-am")} Daniel
            Españadero, <br /> {t("a")}{" "}
            <span className="developer">backend developer</span>
          </h1>
        </div>
        <div className="img-container">
          <img
            className="dif"
            src="/public/images/dif-no-bg.png"
            alt="Daniel Españadero"
          />
        </div>
      </div>
      <div className="about-me">
        <h2>{t("about-me")} 😇</h2>
        <p>{t("description")}</p>
      </div>
      <div className="skills">
        <h2>{t("technical-skills")} 👨🏻‍💻</h2>

        <div className="cards-container">
          {skills.map((skill) => (
            <CardSkill key={skill.name} lang={skill.lang} name={skill.name} />
          ))}
        </div>
      </div>
      <div className="experience">
        <h2>{t("professional-experience")} 💼</h2>
        <div className="all-exp">
          {experiences.map(
            (experience: {
              name: string;
              logo: string;
              position: string;
              description: string;
              technologies: string[];
            }) => {
              return (
                <Experience
                  key={experience.name}
                  logo={experience.logo}
                  name={experience.name}
                  position={t(experience.position)}
                  description={t(experience.description)}
                  technologies={experience.technologies}
                />
              );
            }
          )}
        </div>
      </div>
      <div className="projects">
        <h2>{t("projects")} ⚙️</h2>
        <p>{t("projects-text")}</p>
        <div className="all-projects">
          {projects.map((project: any) => (
            <a
              className="img-link"
              href={project.href}
              target="_BLANK"
              rel="noopener noreferrer"
            >
              <img className="img" src={project.path} alt="" />
            </a>
          ))}
        </div>
      </div>
      <div className="book">
        <h2>{t("wrote-book")} 📖</h2>
        <div className="book-img-text">
          <a
            href="https://www.amazon.es/GU%C3%8DA-PARA-APRENDER-PROGRAMAR-Primer/dp/B0CRPPD8CJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-book"
              src="/public/images/guia para aprender a programar.png"
              alt="guía para aprender a programar"
            />
          </a>

          <div className="book-text-container">
            <h3>
              GUÍA PARA APRENDER A PROGRAMAR: Desde Cero Hasta tu Primer Empleo
            </h3>
            <p>
              ✨ {t("book-text1")} ✨ <br />
              <br />
              {t("book-text2")}
              <br />
              <br /> {t("book-text3")} <br />
              <br />
              {t("book-text4")} <br />
              {t("book-text5")} <br />
              {t("book-text6")}
              <br />
              {t("book-text7")} <br />
              {t("book-text8")} <br />
              {t("book-text9")} <br />
              {t("book-text10")} <br />
              {t("book-text11")}
              <br />
              <br />
              {t("book-text12")}
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="youtube">
        <h2>{t("my-youtube-channel")} 📺</h2>
        <p className="yt-text">{t("yt-text")}</p>
        <img
          className="yt-img"
          src="/public/images/yt.png"
          alt="YouTube @danielespanadero"
        />
      </div>
      <div className="contact">
        <h2>{t("contact")} 📧</h2>
        <form className="form" onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder={t("your-name")}
            required
            minLength={3}
            maxLength={200}
            title="El nombre debe tener entre 3 y 200 caracteres."
          />
          <input
            className="input"
            type="email"
            name="recipient-email"
            placeholder={t("your-email")}
            required
            title="Por favor, ingresa una dirección de correo electrónico válida."
          />
          <textarea
            className="input text"
            name="text"
            placeholder="Message"
            required
            minLength={10}
            title="El mensaje debe tener al menos 10 caracteres."
          ></textarea>
          <button className="bt" id="bt" type="submit">
            <span className="msg" id="msg"></span>
            {t("send")}
          </button>
        </form>
      </div>
    </HomeStyled>
  );
};
