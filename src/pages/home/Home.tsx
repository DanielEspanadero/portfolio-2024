import { HomeStyled } from "./HomeStyled"

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
    </HomeStyled>
  );
}
