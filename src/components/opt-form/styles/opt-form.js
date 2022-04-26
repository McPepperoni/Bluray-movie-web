import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
  padding-bottom: 70px;

  @media (max-width: 1000px) {
    padding: 0 16px 70px 16px;
    flex-direction: column;
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 500px;
  height: 70px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #8c8c8c;
  padding: 10px;

  box-sizing: border-box;

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
    opacity: 0.5;
    margin: 26px 11px;
    position: absolute;
    pointer-events: none;
    transition: 0.1s ease all;

    @media (max-width: 1000px) {
      margin: 21px 11px;
    }

    @media (max-width: 600px) {
      margin: 15px 11px;
    }
  }

  &:not(:placeholder-shown) ~ span {
    margin: 10px 11px;
    font-size: 11px;
    font-weight: bold;

    @media (max-width: 1000px) {
      margin: 4px 11px;
    }
  }

  &:focus ~ s &:focus {
    outline: none;
    border: 1px solid #0071eb;
  }

  @media (max-width: 1000px) {
    height: 60px;
  }

  @media (max-width: 600px) {
    height: 48px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  max-width: 250px;
  display: flex;
  align-items: center;
  border-radius: 0 3px 3px 0;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 26px;
  font-size: 23px;
  border: 0;
  cursor: pointer;
  margin-left: 1px;
  white-space: nowrap;
  justify-content: space-between;

  img {
    filter: brightness(0) invert(1);
    width: 19.5px;
    @media (max-width: 1000px) {
      width: 13px;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    padding: 0 16px;
    width: 132px;
    height: 40px;
    font-size: 13px;
    margin-top: 20px;
    font-weight: bold;
    border-radius: 3px;
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
