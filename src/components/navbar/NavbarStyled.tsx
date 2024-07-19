import styled from "styled-components";

export const NavbarStyled = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  height: 4rem;
  background-color: #0000;
  .container {
    width: 50%;
    height: 100%;
  }
  .right-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3rem;
      width: 3rem;
      border-radius: 0.5rem;
      border: 1px solid #fff4;
      background-color: #000;
      margin-right: 2rem;
      cursor: pointer;
      img {
        width: 50%;
      }
    }
    .btn:hover {
      background-color: #444;
    }
    .btn:active {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }

  .input {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    margin: 4rem 2rem 0 0;
    width: 200px;
    background-color: #000000;
    justify-content: center;
    border-radius: 5px;
  }

  .value {
    background-color: transparent;
    border: none;
    padding: 10px;
    color: white;
    display: flex;
    position: relative;
    gap: 5px;
    cursor: pointer;
    border-radius: 4px;
    text-decoration: none;
  }
  .value.active {
    background-color: #323942;
    color: #999; /* Color para el enlace activo */
  }

  .value:not(:active):hover,
  .value:focus {
    background-color: #21262c;
  }

  .value:focus,
  .value:active {
    background-color: #1a1f24;
    outline: none;
  }

  .value::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -10px;
    width: 5px;
    height: 80%;
    background-color: #2f81f7;
    border-radius: 5px;
    opacity: 0;
  }

  .value:focus::before,
  .value:active::before {
    opacity: 1;
  }

  .value svg {
    width: 15px;
  }
`;
