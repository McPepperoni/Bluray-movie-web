import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const InputContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 10px;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.div`
  corlor: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.div`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: #333;
  border-radius: 4px;
  border: 0;
  color: white;
  height: 50;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  ::placeholder {
    color: transparent;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: transparent;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: transparent;
  }

  & ~ span {
    color: white;
    opacity: 0.5;
    margin: 21px 20px;
    position: absolute;
    pointer-events: none;
    transition: 0.1s ease all;
  }

  &:not(:placeholder-shown) ~ span {
    margin: 7px 20px;
    font-size: 11px;
    font-weight: bold;

    @media (max-width: 1000px) {
      margin: 4px 11px;
    }
  }

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
