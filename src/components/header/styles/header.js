import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(255, 255, 255, 0) 70%, rgba(0, 0, 0, 1)),
    url(${({ src }) => {
        return src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg";
      }})
      top left / cover no-repeat;
`;

export const FixedContainer = styled.div`
  display: flex;
  position: fixed;
  margin: 0;
  height: 64px;
  padding: 18px 56px;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 112px);
  background: linear-gradient(rgba(0, 0, 0, 1) 20px, rgba(255, 255, 255, 0));
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

export const Feature = styled(Container)`
  padding: 350px 0 390px 0;
  flex-direction: column;
  align-items: normal;
  width: 30%;
`;

export const Text = styled.p`
  color: white;
  font-size: 1vw;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  text-overflow: ellipsis;
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 3vw;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 20px;
`;

export const Link = styled.p`
  color: ${({ active }) => (active === "true" ? "white" : "#DDDDDD")};
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;

  &:hover {
    color: #b2b2b2;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
`;

export const Dropdown = styled.div`
  display: none;
  background-color: black;
  position: absolute;
  padding: 10px;
  width: 180px;
  top: 30px;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;

    &:hover {
      font-weight: normal;
      text-decoration: underline;
    }
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  position: absolute;
  background-color: transparent;
  border: 0;
  margin-top: 2px;
  position: absolute;
  right: 112px;
  transition: all 0.5s;

  img {
    filter: brightness(0) invert();
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  border: 2px solid white;
  transition: all 0.5s;
  height: 34px;
  font-size: 14px;
  margin: 0;
  padding: 0;
  opacity: 0;
  width: 0;
  /* margin-left: ${({ active }) => (active === true ? "10px" : "0")};
  padding: ${({ active }) => (active === true ? "0 10px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "270px" : "0")}; */

  &:focus {
    outline: none;
    padding-left: 30px;
    padding-right: 10px;
    opacity: 1;
    width: 230px;

    & + ${SearchIcon} {
      margin-right: 240px;
    }
  }
`;

export const PlayButton = styled.button`
  display: flex;
  //justify-content: center;
  align-items: center;
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 0.5vw 1.5vw;
  border-radius: 4px;
  max-width: fit-content;
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }

  img {
    width: 25px;
    padding-right: 5px;

    @media (max-width: 1100px) {
      width: 2.5vw;
    }
  }

  @media (max-width: 1100px) {
    font-size: 2vw;
  }
`;

export const InfoButton = styled.button`
  display: flex;
  //justify-content: center;
  align-items: center;
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: rgba(255, 255, 255, 0.35);
  color: #fff;
  border-width: 0;
  padding: 0.5vw 1.5vw;
  border-radius: 4px;
  max-width: fit-content;
  font-size: 20px;
  margin-top: 30px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  img {
    width: 25px;
    padding: 0 5px;
    filter: brightness(0) invert();

    @media (max-width: 1100px) {
      width: 2.5vw;
    }
  }

  @media (max-width: 1100px) {
    font-size: 2vw;
  }
`;
