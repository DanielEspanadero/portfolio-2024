import { CoursesStyled } from './CoursesStyled';
import courses from '../../jsons/courses.json';

export const Courses = () => {
  return (
    <CoursesStyled>
      <h1>CURSOS</h1>
      <p className='courses-text'>
        Aquí puedes encontrar una selección de mis cursos gratuitos que he
        desarrollado a lo largo de mi carrera profesional. En ellos, no solo
        demuestro mis conocimientos técnicos de manera práctica, sino que
        también han acumulado más de 800,000 visualizaciones en total, validando
        así la utilidad de dichos conocimientos por parte de los usuarios. En la actualidad sólo dispongo de cursos en español, aunque me gustaría subir material en inglés en un futuro.
      </p>
      <div className="courses-container">
        {courses.map((course: any) => (
          <a className="url-card" href={course.url} target='_BLANK'>
            <div className="card">
              <div className="img-container">
                <img src={course.img} alt={course.title} />
              </div>
              <div className="text-card">
                <p className="heading">{course.title}</p>
                <p>{course.time}</p>
                <p>{course.platform}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </CoursesStyled>
  );
}
