import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <StyledHome>
      <div className="div">
        <div className="navbar">
          <div className="logo">
            <div className="text-wrapper">TERAPIA GPT</div>
          </div>
          <div className="nav-links">
            <div className="text-wrapper-2">Planos</div>
            <div className="text-wrapper-3">Ferramentas</div>
            <div className="text-wrapper-4">Novidades</div>
          </div>
          <button className="button">
            <div className="text-wrapper-5">Fazer Login</div>
          </button>
        </div>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & .div {
    background-color: #ffffff;
    width: 100%;
    position: relative;
  }

  & .navbar {
    align-items: center;
    background-color: #ffffff;
    display: flex;
    gap: 40px;
    height: 80px;
    justify-content: space-between;
    left: 0;
    padding: 0 40px;
    position: fixed;
    top: 0;
    width: 100%;
    box-sizing: border-box;
  }

  & .logo {
    align-items: center;
    display: inline-flex;
    gap: 10px;
    position: relative;
  }

  & .text-wrapper {
    color: #000000;
    font-family: "Inter-Bold", Helvetica;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .nav-links {
    align-items: center;
    display: flex;
    gap: 40px;
    position: relative;
    width: fit-content;
  }

  & .text-wrapper-2 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-3 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-4 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .button {
    all: unset;
    align-items: center;
    background-color: #000000;
    border-radius: 100px;
    box-sizing: border-box;
    display: flex;
    gap: 10px;
    height: 48px;
    justify-content: center;
    padding: 12px 24px;
    position: relative;
    width: fit-content;
  }

  & .text-wrapper-5 {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;

export default Home;
