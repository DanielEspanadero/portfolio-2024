import styled from "styled-components";

export const ExperienceStyled = styled.div`
  width: 80%;
  margin: 2rem;
  border-radius: 1rem;
  background-color: #222;
  overflow: hidden;
  .header {
    display: flex;
    flex-direction: column;
    width: 100%;
    .img-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 1rem;
      img {
        width: 90%;
      }
    }
    .title-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin: 1rem 0 0 1rem;
      h2 {
        font-size: 1.4rem;
      }
      h3 {
        font-size: .8rem;
      }
    }
  }
  .description-container {
    margin: 1rem;
  }
  .technologies {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    font-size: 1rem;
    margin: 1rem;
    .technology {
      font-size: 1.5rem;
      margin: 1rem;
    }
  }

  @media (min-width: 750px) {
    .header {
      flex-direction: row;
      .img-container {
        width: 40%;
        img {
          width: 90%;
        }
      }
      .title-container {
        margin-left: 2rem;
        h2 {
            font-size: 2rem;
        }
        h3 {
          font-size: 1rem;
        }
      }
    }
    .description-container {
      margin: 1rem;
    }
    .technologies {
      font-size: 1rem;
      margin: 1rem;
      .technology {
        font-size: 1.5rem;
        margin: 0 1rem;
      }
    }
  }
`;