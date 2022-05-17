import styled from "styled-components/macro";

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;

  @media (max-width: 1100px) {
    font-size: 18px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 10px;
  }

  @media (max-width: 530px) {
    font-size: 12px;
    margin-left: 14px;
    margin-right: 14px;
    margin-bottom: 6px;
  }
`;

export const MatchRate = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #46d369;

  @media (max-width: 1100px) {
    font-size: 10px;
  }

  @media (max-width: 530px) {
    font-size: 8px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 100%;
  box-sizing: border-box;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1100px) {
    margin-bottom: 30px;
  }

  @media (max-width: 530px) {
    margin-bottom: 15px;
  }
`;

export const Group = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background-color: #141414;
  align-items: center;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    margin-top: -150px;

    @media (max-width: 1100px) {
      margin-top: -60px;
    }

    @media (max-width: 530px) {
      margin-top: -40px;
    }
  }
`;

export const Subtitle = styled.li`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin: 0 3px;
  user-select: none;
  list-style-type: none;

  @media (max-width: 1100px) {
    font-size: 10px;
  }

  @media (max-width: 530px) {
    font-size: 6px;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Text = styled.div`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const ToolTip = styled.div`
  display: none;
  position: absolute;
  background-color: #e6e6e6;
  color: black;

  top: -150%;
  padding: 8px 10px;
  border-radius: 3px;

  -webkit-box-shadow: 4px 10px 15px -3px #000000;
  box-shadow: 4px 10px 15px -3px #000000;

  img {
    position: absolute;
    filter: invert(100%) sepia(1%) saturate(2858%) hue-rotate(150deg)
      brightness(119%) contrast(80%);

    width: 16px;
    left: calc(50% - 8px);
    bottom: calc(-25% + 1px);
  }
`;

export const ToolTipText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  white-space: nowrap;
`;

export const LikeButtons = styled.div`
  display: flex;
  position: absolute;
  flex-wrap: nowrap;
  background-color: #232323;
  transform: scaleX(0);
  opacity: 0;
  transition: all 0.25s;
  z-index: 9999;

  -webkit-box-shadow: 4px 10px 15px -3px #000000;
  box-shadow: 4px 10px 15px -3px #000000;
  padding: 10px;
  border-radius: 100px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isBlack }) =>
    isBlack === true ? `transparent` : "white"};
  border-radius: 50%;
  cursor: pointer;
  border: ${({ isBlack }) => (isBlack === true ? "2px #888 solid" : "0")};

  margin: 0 3px;
  height: 32px;
  width: 32px;

  > img {
    filter: ${({ isBlack }) =>
      isBlack === true ? "brightness(0) invert(1)" : "none"};
    aspect-ratio: 1;
    width: 24px;

    margin: ${({ isBlack }) => (isBlack === true ? "1px" : "0 0 0 4px")};

    @media (max-width: 1100px) {
      padding: 0;
      margin: ${({ isBlack }) => (isBlack === true ? "1px" : "2px 0 2px 2px")};
    }

    @media (max-width: 600px) {
      padding: 0;
      margin: ${({ isBlack }) => (isBlack === true ? "1px" : "0 0 0 1px")};
    }
  }

  &:hover {
    border: ${({ isBlack }) => (isBlack === true ? "2px white solid" : "0")};
    background-color: ${({ isBlack }) =>
      isBlack === true ? `transparent` : "rgba(255, 255, 255, 0.85)"};
    border-radius: 50%;

    ${LikeButtons} {
      transform: scaleX(1);
      opacity: 1;
    }

    ${ToolTip} {
      display: flex;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  @media (max-width: 1100px) {
    padding: 1px;
    margin: 0 1px;

    height: 24px;
    width: 24px;

    border: ${({ isBlack }) => (isBlack === true ? "1px #888 solid" : "0")};
  }
`;

export const InfoText = styled.div`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) =>
    fontWeight === "bold" ? "bold" : "normal"};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;
export const Info = styled.div`
  display: flex;
  position: absolute;
  opacity: 0;
  flex-direction: column;
  transition: opacity 0.2s;
  /* background: url(${({ src }) => src}); */
  background-size: contain;
  height: fit-content;
  background-color: #141414;
  background-position-x: right;
  background-repeat: no-repeat;

  top: 100%;
  width: 100%;

  border-radius: 0 0 3px 3px;
  -webkit-box-shadow: 4px 10px 15px -3px #000000;
  box-shadow: 4px 10px 15px -3px #000000;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }

    ${InfoText} {
      font-size: 14px;
    }
  }
`;

export const Maturity = styled.div`
  border: 1px #888 solid;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0 5px;
  font-size: 12px;
  height: fit-content;
  width: fit-content;
  padding: 0px 4px;
`;

export const Content = styled.div`
  display: flex;
  padding: 3px 16px;
  line-height: normal;
  justify-content: space-between;

  @media (max-width: 1100px) {
    padding: 8px;
  }

  @media (max-width: 600px) {
    padding: 4px;
  }

  &:first-of-type {
    padding: 16px 16px 3px 16px;

    @media (max-width: 1100px) {
      padding-left: 8px;
      padding-right: 8px;
    }

    @media (max-width: 600px) {
      padding-left: 4px;
      padding-right: 4px;
    }
  }

  &:last-of-type {
    padding: 3px 16px 16px 16px;
    @media (max-width: 1100px) {
      padding-left: 8px;
      padding-right: 8px;
      padding-bottom: 6px;
    }

    @media (max-width: 600px) {
      padding-left: 4px;
      padding-right: 4px;
      padding-bottom: 0px;
    }
  }
`;

export const Entity = styled.div`
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  margin: 0 56px;
  @media (max-width: 1100px) {
    margin: 0 30px;
  }

  @media (max-width: 530px) {
    margin: 0 16px;
  }
`;

export const Image = styled.img`
  border-radius: 3px;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  border-radius: 0.3vw;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.36);
    z-index: 999;
    -webkit-box-shadow: 4px 10px 15px -3px #000000;
    box-shadow: 4px 10px 15px -3px #000000;

    ${Info} {
      opacity: 1;
    }

    img {
      border-radius: 3px 3px 0 0;
    }
  }
  @media (min-width: 1200px) {
    &:hover ${Text}, &:hover ${Subtitle} {
      display: block;
      z-index: 100;
    }
  }
`;
