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

  .projects {
    width: 90%;
    color: #fff;
    margin: 4rem 0;
    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-align: center;
    }
  }

  .book {
    width: 90%;
    color: #fff;
    margin: 4rem 0;
    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-align: center;
    }
  }

  .youtube {
    width: 90%;
    color: #fff;
    margin: 4rem 0;
    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-align: center;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    color: #fff;
    margin: 4rem 0;
    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    .form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #3337;
      width: 95%;
      margin: 2rem 0;
      border-radius: 1rem;
      .input {
        width: 90%;
        margin-top: 2rem;
        padding: 0.5rem 1rem;
        background-color: #000;
        border: none;
        border-bottom: 1px solid #eee;
        color: #fff;
      }
      .input:focus {
        background-color: #444;
        outline: none;
      }
      .text {
        min-height: 8rem;
        resize: none;
      }
      .bt {
        border: none;
        user-select: none;
        font-size: 15px;
        color: white;
        text-align: center;
        background-color: #000000;
        box-shadow: #cacaca 2px 2px 10px 1px;
        border-radius: 12px;
        height: 30px;
        line-height: 30px;
        width: 75px;
        transition: all 0.2s ease;
        position: relative;
        margin: 2rem 0;
      }

      .msg {
        height: 0;
        width: 0;
        border-radius: 2px;
        position: absolute;
        left: 15%;
        top: 25%;
      }

      .bt:active {
        transition: all 0.001s ease;
        background-color: #626567;
        box-shadow: #97989a 0 0 0 0;
        transform: translateX(1px) translateY(1px);
      }

      .bt:hover .msg {
        animation: msgRun 2s forwards;
      }

      @keyframes msgRun {
        0% {
          border-top: #d6d6d9 0 solid;
          border-bottom: #f2f2f5 0 solid;
          border-left: #f2f2f5 0 solid;
          border-right: #f2f2f5 0 solid;
        }

        20% {
          border-top: #d6d6d9 14px solid;
          border-bottom: #f2f2f5 14px solid;
          border-left: #f2f2f5 20px solid;
          border-right: #f2f2f5 20px solid;
        }

        25% {
          border-top: #d6d6d9 12px solid;
          border-bottom: #f2f2f5 12px solid;
          border-left: #f2f2f5 18px solid;
          border-right: #f2f2f5 18px solid;
        }

        80% {
          border-top: transparent 12px solid;
          border-bottom: transparent 12px solid;
          border-left: transparent 18px solid;
          border-right: transparent 18px solid;
        }

        100% {
          transform: translateX(150px);
          border-top: transparent 12px solid;
          border-bottom: transparent 12px solid;
          border-left: transparent 18px solid;
          border-right: transparent 18px solid;
        }
      }
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
    .all-exp {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .contact {
      .form {
        width: 50%;
        margin: 2rem 0;
        border-radius: 1rem;
        .input {
          width: 60%;
          margin-top: 2rem;
          padding: 0.5rem 1rem;
          border: none;
        }
        .text {
          min-height: 8rem;
        }
      }
    }
  }
`;
