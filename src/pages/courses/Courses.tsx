import { CoursesStyled } from './CoursesStyled';
import courses from '../../jsons/courses.json';
import { useTranslation } from 'react-i18next';

export const Courses = () => {
      const { t } = useTranslation();

  return (
    <CoursesStyled>
      <h1>{t("courses").toUpperCase()}</h1>
      <p className='courses-text'>
        {t("courses-page-text")}
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
