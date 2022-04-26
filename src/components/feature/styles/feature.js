import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 117px 45px;

  @media (max-width: 600px) {
    padding: 40px 0px;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 800px;
  font-size: 70px;
  margin: auto;

  @media (max-width: 1499px) {
    max-width: 640px;
    font-size: 50px;
  }

  @media (max-width: 600px) {
    font-size: 28px;
    margin: auto 16px;
  }
`;

export const Subtitle = styled.h2`
  color: white;
  max-width: 640px;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
