import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  height: 100%;
  width: 100%;
`;

export const VolumeContainer = styled.div`
  display: none;
  position: absolute;
  padding: 20% 1%;
  justify-content: center;
  border-radius: 3px;

  bottom: 100%;

  width: 50%;
  height: 20vh;
  background-color: #262626;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  ${({ justifyContent }) =>
    justifyContent
      ? `justify-content: ${justifyContent}`
      : `justify-content: center`};
  position: relative;

  ${({ flexDirection }) =>
    flexDirection ? `flex-direction: ${flexDirection}` : "flex-direction: row"};
  ${({ width }) => (width === "100%" ? "width: 100%" : `width: ${width}`)};

  ${({ height }) => (height ? `height: ${height}` : "height: 5vw")};
  ${({ minHeight }) =>
    minHeight ? `min-height: ${minHeight}` : "min-height: 64px"};

  &:hover > ${VolumeContainer} {
    display: flex;
  }
`;

export const Inner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;

  margin: auto;

  video {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const ButtonImage = styled.img.attrs(({ name }) => ({
  src: `/images/icons/player/${name}.png` || "/images/icons/player/play.png",
}))`
  transition: all 0.25s;
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const Button = styled.button`
  display: ${({ name, btnState }) => (name === btnState ? "flex" : "none")};
  position: relative;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  background-color: transparent;
  border: 0;
  padding: 0;
  margin: 20px 30px;
  height: 38px;
  width: 38px;

  &:hover {
    ${ButtonImage} {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`;

export const TopButton = styled(Button)`
  display: flex;

  &:hover {
    ${ButtonImage} {
      transform: none;
    }
  }
`;

export const VolumeSlider = styled.input.attrs({
  type: "range",
  min: 0,
  max: 100,
  orient: "vertical",
})`
  display: block;
  height: 100%;
  width: 10px;

  -webkit-appearance: none;
  background: transparent;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  &::-ms-track {
    width: 100%;
    cursor: pointer;

    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 0;
    background: #ff0000;
    cursor: pointer;
    margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  }

  /* All the same stuff for Firefox */
  &::-moz-range-thumb {
    border: 0;
    background: #ff0000;
    cursor: pointer;
  }

  /* All the same stuff for IE */
  &::-ms-thumb {
    border: 0;
    background: #ff0000;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: #808080;
    border-radius: 0;
    border: 0;
  }

  &::-moz-range-track {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: #808080;
    border-radius: 0;
    border: 0;
  }

  &::-ms-track {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: #808080;
    border-radius: 0;
    border: 0;
  }

  &::-ms-fill-lower {
    background: #ff0000;
  }
  &:focus::-ms-fill-lower {
    background: #ff0000;
  }
  &::-ms-fill-upper {
    background: #080808;
  }

  &::-moz-range-progress {
    background-color: #ff0000;
    width: 100%;
  }

  &::-moz-range-track {
    background-color: #808080;
  }
`;

export const ProgressBar = styled(VolumeSlider).attrs({
  orient: "horizontal",
})`
  height: 3px;
  padding: 0;
  margin: 0 20px;
  width: 100%;
`;

export const Title = styled.p`
  color: white;
  font-size: 18px;
  margin: auto;
`;

export const Duration = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #ebebeb;
  margin: 0 20px 0 0;
`;
