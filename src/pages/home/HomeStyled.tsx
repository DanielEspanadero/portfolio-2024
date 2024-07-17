import styled from "styled-components";

export const HomeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #121418;
  .presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    .text-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20%;
      color: #fff;
      font-size: 1rem;
      text-align: center;
      margin: 2rem 0;
      .greeting:hover {
        display: inline-block;
        transform: rotate(-30deg);
        animation: wave 1s infinite linear;
        transform-origin: 70% 70%;
      }
      @keyframes wave {
        0%,
        100% {
          transform: rotate(0deg);
        }
        25% {
          transform: rotate(10deg);
        }
        75% {
          transform: rotate(-10deg);
        }
      }

      .developer {
        display: inline-block;
        color: #009aff;
        background-color: #009aff55;
        border-radius: 1rem;
        padding: 0.6rem;
        margin-top: 0.3rem;
      }
    }
    .img-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 60%;
      .dif {
        width: 90%;
        mask-image: linear-gradient(black 50%, transparent);
        filter: grayscale(100%);
        transition: all 0.5s;
      }
      .dif:hover {
        filter: grayscale(0%);
        transform: scale(105%);
      }
    }
  }
  .about-me {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    width: 95%;
    padding: 3rem 0;
    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    p {
      width: 95%;
      font-size: 1.5rem;
      text-align: justify;
      line-height: 1.5;
      .java {
        background-color: #e76f00;
        border-radius: 0.5rem;
        padding: 0.1rem;
        color: #000;
      }
      .spring {
        background-color: #6db33e;
        border-radius: 0.5rem;
        padding: 0.1rem;
        color: #000;
      }
      .mysql {
        background-color: #017691;
        border-radius: 0.5rem;
        padding: 0.1rem;
        color: #000;
      }
      .youtube {
        background-color: #ff0200;
        border-radius: 0.5rem;
        padding: 0.1rem;
        color: #000;
      }
      .youtube:hover {
        color: #fff;
      }
      .book {
        background-color: #ffffff;
        border-radius: 0.5rem;
        padding: 0.1rem;
        color: #000;
      }
      .book:hover {
        color: #89b9cc;
      }
      .java {
        background-color: #e76f00;
        border-radius: 0.5rem;
        padding: 0.1rem;
      }
      .spring {
        background-color: #6db33e;
        border-radius: 0.5rem;
        padding: 0.1rem;
      }
      .mysql {
        background-color: #017691;
        border-radius: 0.5rem;
        padding: 0.1rem;
      }
    }
  }

  .skills {
    width: 90%;
    color: #fff;
    margin: 4rem 0;
    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    .cards-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
    }
  }

  @media (min-width: 750px) {
    .presentation {
      height: 120vh;
      .text-container {
        font-size: 2rem;
      }
    }
    .about-me {
      width: 80%;
      margin-top: 5rem;
      padding: 3rem 0;
      h2 {
        font-size: 3rem;
        margin: 2rem;
      }
      p {
        width: 70%;
        font-size: 1.5rem;
        text-align: justify;
        line-height: 1.5;
      }
    }
  }
  .experience {
    width: 90%;
    color: #fff;
    margin: 4rem 0;
    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-align: center;
    }
  }
`;
