import styled from "styled-components";

export const CoursesStyled = styled.div`
  min-height: 100vh;
  color: #fff;
  h1 {
    padding-top: 8rem;
    text-align: center;
  }
  .courses-text {
    display: inline-block;
    width: 80%;
    margin-left: 10%;
    margin-top: 2rem;
    font-size: 1.2rem;
  }
  .courses-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    min-height: 100vh;
    margin: 4rem 0;
  }
  .url-card {
    width: 228px;
    height: 304px;
    margin: 4rem;
    .card {
      position: relative;
      width: 228px;
      height: 304px;
      background-color: #000;
      display: flex;
      flex-direction: column;
      padding: 12px;
      gap: 12px;
      border-radius: 8px;
      cursor: pointer;
      .img-container {
        position: relative;
        top: 0;
        width: 100%;
        img {
          width: 100%;
        }
      }
      .text-card {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        flex-direction: column;
        width: 100%;
        height: 60%;
      }
    }

    .card::before {
      content: "";
      position: absolute;
      inset: 0;
      left: -6px;
      margin: auto;
      width: 240px;
      height: 317px;
      border-radius: 10px;
      background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
      z-index: -10;
      pointer-events: none;
      transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .heading {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 700;
    color: #fff;
  }

  .card p:not(.heading) {
    font-size: 14px;
    color: #fff;
  }

  .card p:last-child {
    color: #e81cff;
    font-weight: 600;
  }

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }
`;