import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  background-color: black;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  margin-bottom: 2px;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;

  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.2s cubic-bezier(0.5, 0, 0.1, 1);
  }
  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px 0 45px;
  flex-direction: column;
  max-width: 950px;
  margin: auto;

  @media (max-width: 530px) {
    padding: 70px 0 0 0;
  }
`;

export const Title = styled.h1`
  font-size 50px;
  line-height: 1.1
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 45px;
  }

  @media (max-width: 600px) {
    font-size: 25px;
    padding: 0 16px;
  }
`;
