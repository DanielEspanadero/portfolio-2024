import { useTranslation } from "react-i18next";
import { ExperienceStyled } from "./ExperienceStyled";

interface ExperienceProps {
  logo: string;
  name: string;
  position: string;
  description: string;
  technologies: string[];
}

export const Experience: React.FC<ExperienceProps> = ({logo, name, position, description, technologies}) => {
    const { t } = useTranslation();

  return (
    <ExperienceStyled>
      <div className="header">
        <div className="img-container">
          <img src={logo} alt="" />
        </div>
        <div className="title-container">
          <h2>{name}</h2>
          <h3>{position}</h3>
        </div>
      </div>
      <div className="description-container">
        <p>{description}</p>
      </div>
      <div className="technologies">
        <p>{t("technologies")}:</p>
        {technologies.map((technology: string) => {
          return (
            <i className={`technology ${technology}`} key={technology}></i>
          );
        })}
      </div>
    </ExperienceStyled>
  );
};
