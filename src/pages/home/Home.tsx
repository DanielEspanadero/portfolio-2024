import { CardSkill } from "../../components/card-skill/CardSkill";
import { HomeStyled } from "./HomeStyled";
import skills from "../../jsons/skills.json";

export const Home = () => {
  return (
    <HomeStyled>
      <div className="presentation">
        <div className="text-container">
          <h1>
            Hey <span className="greeting">👋</span> I'm Daniel Españadero,{" "}
            <br /> a <span className="developer">software enginyeer</span>
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
        <h2>About Me 😇</h2>
        <p>
          I'm Daniel Españadero, a passionate software enginyeer based in
          Barcelona, with over three years of experience creating innovative and
          efficient solutions. My specialization in{" "}
          <span className="java">Java</span>,{" "}
          <span className="spring">Spring Boot</span>, and{" "}
          <span className="mysql"> MySQL</span> has allowed me to contribute to
          large-scale projects in the IT industry, as well as various web
          applications throughout my freelance career. I am motivated by
          tackling complex challenges and turning ideas into reality through
          clean and scalable code. In addition to my technical expertise, I
          deeply value teamwork, effective communication, and continuous
          learning. I also manage a{" "}
          <a
            className="youtube"
            href="https://www.youtube.com/@danielespanadero"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube channel
          </a>{" "}
          with over 11,000 subscribers, where I share educational content about
          programming, helping other developers improve their skills and stay
          up-to-date with the latest technologies. I am the author of the book{" "}
          <a
            className="book"
            href="https://amzn.eu/d/0buFbr0P"
            target="_blank"
            rel="noopener noreferrer"
          >
            "GUÍA PARA APRENDER A PROGRAMAR: Desde Cero Hasta tu Primer Empleo"
          </a>{" "}
          which guides aspiring developers from the basics to securing their
          first job in the field. In my free time, I enjoy exploring new
          technologies and contributing to open-source projects, always seeking
          ways to improve and grow professionally.
        </p>
      </div>
      <div className="skills">
        <h2>Technical Skills 👨🏻‍💻</h2>

        <div className="cards-container">
          {skills.map((skill) => (
            <CardSkill key={skill.name} lang={skill.lang} name={skill.name} />
          ))}
        </div>
      </div>
      <div className="experience">
        <h2>Professional Experience 💼</h2>
      </div>
    </HomeStyled>
  );
}
