import styled from "styled-components";

export const HomeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  .presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120vh;
    .text-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20%;
      color: #fff;
      font-size: 1rem;
      text-align: center;
      .greeting:hover {
        display: inline-block;
        transform: rotate(-30deg);
        animation: wave 1s infinite linear;
        transform-origin: 70% 70%;
        cursor: grab;
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

  @media (min-width: 750px) {
    .presentation {
      .text-container {
        font-size: 2rem;
      }
    }
  }
`;
