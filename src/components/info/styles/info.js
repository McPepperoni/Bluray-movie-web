import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  opacity: ${({ active }) => (active ? "1" : "0")};
  position: absolute;
  justify-content: center;
  width: 100%;
  height: 100%;

  transform: ${({ active }) => (active ? "scale(1)" : "scale(0)")};
  transition: all 0.1s ease-in-out;

  top: ${({ yOffSet }) => (yOffSet ? `${yOffSet}px` : "0")};

  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ active }) => (active ? "99999" : "1")}; ;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: fit-content;
  background-color: #141414;
  border-radius: 10px;
  transform: ${({ active }) => (active ? "scale(1)" : "scale(0)")};
  transition: transform 0.25s ease-in-out;

  margin-top: 50px;
  padding-bottom: 45px;
`;

export const Background = styled.div`
  display: flex;
  position: relative;
  height: 320px;
  flex-direction: column;
  justify-content: flex-end;

  padding: 50px 45px;
  border-radius: 10px 10px 0 0;

  @media (max-width: 600px) {
    padding: 40px 0px;
  }
  background: linear-gradient(rgba(255, 255, 255, 0) 60%, rgba(20, 20, 20, 1))
      10%,
    url(${({ src }) => (src ? `${src}` : "../images/misc/joker1.jpg")}) center
      right / cover no-repeat;
`;

export const Group = styled.div`
  display: flex;
  position: relative;
  flex-wrap: ${({ flexWrap }) => (flexWrap ? `${flexWrap}` : "wrap")};
  align-items: center;

  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : "flex-start"};

  margin: ${({ margin }) => (margin ? `${margin}` : "0")};

  button {
    margin: 0 4px;
  }
`;

export const Meta = styled(Group)`
  p {
    margin-right: 8px;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 800px;
  font-size: 70px;
  margin: 0 0 30px 0;

  @media (max-width: 1499px) {
    max-width: 640px;
    font-size: 50px;
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.h2`
  color: white;
  max-width: 640px;
  font-size: 15px;
  font-weight: normal;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  cursor: pointer;

  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;

  img {
    margin: 9px;
    aspect-ratio: 1;
    width: 100%;
    filter: brightness(0) invert(1);
  }
`;

export const Column = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  grid-gap: 50px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const DetailTitle = styled.p`
  padding: 0;
  margin: 0;
  font-size: 13px;
`;

export const DetailContent = styled(DetailTitle)`
  white-space: nowrap;
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const MatchRate = styled.p`
  color: #46d369;
`;

export const Year = styled.p`
  color: white;
`;

export const Maturity = styled(Year)`
  border: 1px #747474 solid;
  padding: 2px 4px;
`;

export const Resolution = styled(Year)`
  font-size: 10px;
  border: 1px #747474 solid;
  border-radius: 3px;
  padding: 1px 7px;
`;

export const Duration = styled(Year)``;
