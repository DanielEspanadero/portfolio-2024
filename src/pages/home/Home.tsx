import { CardSkill } from "../../components/card-skill/CardSkill";
import { HomeStyled } from "./HomeStyled";
import skills from "../../jsons/skills.json";
import experiences from "../../jsons/experiences.json";
import { Experience } from "../../components/experience/Experience";
import sendEmail from "../../config/sendEmail";
import { Projects } from "../../components/projects/Projects";

export const Home = () => {
  return (
    <HomeStyled>
      <div className="presentation">
        <div className="text-container">
          <h1>
            Hey <span className="greeting">👋</span> I'm Daniel Españadero,{" "}
            <br /> a <span className="developer">backend developer</span>
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
          I am a software developer with over three years of experience,
          specializing in backend development. I have worked on significant
          projects using technologies such as Java, Spring Boot, and MySQL, and
          I have experience implementing microservices, hexagonal architecture,
          and domain-driven design (DDD). Additionally, I am proficient with
          modern tools and technologies like Apache Kafka, Docker, and AWS,
          which enable me to build efficient and scalable applications. I am
          passionate about staying up-to-date with the latest trends in backend
          development and continuously enhancing my skills to deliver innovative
          and high-quality solutions.
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
                  position={experience.position}
                  description={experience.description}
                  technologies={experience.technologies}
                />
              );
            }
          )}
        </div>
      </div>
      <div className="projects">
        <h2>Some of my projects ⚙️</h2>
        <Projects />
      </div>
      <div className="book">
        <h2>I wrote a programming book! 📖</h2>
      </div>
      <div className="youtube">
        <h2>My YouTube channel 📺</h2>
      </div>
      <div className="contact">
        <h2>Contact with me 📧</h2>
        <form className="form" onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            minLength={3}
            maxLength={200}
            title="El nombre debe tener entre 3 y 200 caracteres."
          />
          <input
            className="input"
            type="email"
            name="recipient-email"
            placeholder="Your Email"
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
            SEND
          </button>
        </form>
      </div>
    </HomeStyled>
  );
};
