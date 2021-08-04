import styled from "styled-components";
import ImgBg from "../images/pizza-1.jpg";

export const SignupContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 150vh;
  background-position: center;
  background-size: cover;
`;

export const FlexContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 35%;
  transform: translate(-50%.-50%);
  width: 25rem;
  padding: 2.5rem;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.625rem;
`;

export const HeadingH1 = styled.h1`
  margin: 0 0 1.875rem;
  padding: 0;
  color: #fff;
  text-align: center;
`;
export const Form = styled.div`
  width: 100%;
  background: transparent;
  padding: 0.625rem 0;
  font-size: 1rem;
  color: #fff;
  letter-spacing: 0.062rem;
  margin-bottom: 1.875rem;
  border: none;
  border-bottom: 0.065rem solid #fff;
  outline: none;
`;

