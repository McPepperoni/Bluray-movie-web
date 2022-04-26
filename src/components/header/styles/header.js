import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
    top left / cover no-repeat;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }

  @media (max-width: 530px) {
    margin: 0 calc(16px + 0.1vw);
  }
`;

export const Logo = styled.img`
  width: 167px;
  margin-right: 40px;

  @media (max-width: 1449px) {
    width: 134px;
  }

  @media (max-width: 1000px) {
    width: 108px;
  }

  @media (max-width: 530px) {
    height: 24px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: fit-content;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  white-space: nowrap;

  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 1000px) {
    padding: 4px 8px;
  }
`;
