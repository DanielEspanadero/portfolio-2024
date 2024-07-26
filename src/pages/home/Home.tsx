import { CardSkill } from "../../components/card-skill/CardSkill";
import { HomeStyled } from "./HomeStyled";
import skills from "../../jsons/skills.json";
import experiences from "../../jsons/experiences.json";
import { Experience } from "../../components/experience/Experience";
import sendEmail from "../../config/sendEmail";
import projects from "../../jsons/projects.json";

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
        <p>
          The vast majority of the backend projects that I have carried out are
          private repositories for security reasons, that is why I will share
          links to some videos where I explain concepts widely used in the
          industry and that demonstrate my knowledge on the subject.
        </p>
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
        <h2>I wrote a programming book! 📖</h2>
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
              ✨ ARE YOU READY TO BECOME A PROGRAMMER AND LAND YOUR FIRST JOB?
              ✨ <br />
              <br />
              The challenges of learning to program can seem overwhelming, from
              understanding fundamental concepts to creating functional
              applications and gaining recognition in the tech world to achieve
              your big goal: GETTING YOUR FIRST JOB AS A PROGRAMMER.
              <br />
              <br /> ☹ But don't worry, you're one step away from the solution.
              ✔️ ✏ This is the ultimate guide that will teach you to: <br />
              ▶️ Choose the best path in programming to find a job. <br />
              ▶️ Learn about different types of programming languages. <br />
              ▶️ Understand how a programmer's mind works. <br />
              ▶️ Create projects and themes that stand out. <br />
              ▶️ Develop your personal brand. <br />
              ▶️ Optimize LinkedIn, GitHub, and your portfolio to highlight your
              profile. ▶️ Capture recruiters' attention. <br />
              ▶️ Prepare for job interviews. <br />
              ▶️ Take your first steps in your first job. Why trust this book?
              <br />
              <br />
              ✌️ DANIEL ESPAÑADERO is a self-taught software engineer who has
              guided thousands of people to achieve their goals through his
              YouTube channel focused on programming. He has poured all his
              experience and knowledge from years of teaching and mentoring into
              this book, aiming to help everyone who reads and applies it to get
              a job as a programmer. <br />
            </p>
          </div>
        </div>
      </div>
      <div className="youtube">
        <h2>My YouTube channel 📺</h2>
        <p className="yt-text">
          In my free time, I like to share content and teach programming-related
          content. I currently have a community of more than 10,000 people
          passionate about the world of software engineering.
        </p>
        <img
          className="yt-img"
          src="/public/images/yt.png"
          alt="YouTube @danielespanadero"
        />
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
