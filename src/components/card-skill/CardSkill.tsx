import { CardSkillStyled } from "./CardSkillStyled";

interface CardSkillProps {
  lang: string;
  name: string;
}

export const CardSkill: React.FC<CardSkillProps> = ({ lang, name }) => {
  return (
    <CardSkillStyled>
      <div className="card">
        <i className={lang}></i>
        <p>{name}</p>
      </div>
    </CardSkillStyled>
  );
};
