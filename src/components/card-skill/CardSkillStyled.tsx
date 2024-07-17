import styled from "styled-components";

export const CardSkillStyled = styled.div`
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 150px;
    height: 200px;
    background-color: #fff3;
    border-radius: 1rem;
    margin: 2rem;
    i {
      font-size: 4rem;
    }
    p {
      font-size: 1rem;
      margin: 1rem;
      text-align: center;
    }
  }
  .card:hover {
    background-color: #f00;
    cursor: pointer;
  }
  .card:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
