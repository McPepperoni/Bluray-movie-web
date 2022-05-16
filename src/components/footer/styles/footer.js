import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 0;
  margin: auto;
  max-width: 1000px;
  min-width: 292px;
  flex-direction: column;

  @media (max-width: 1100px) {
    padding: 70px 30px;
  }

  @media (max-width: 530px) {
    padding: 70px 16px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 5px;
  }
  @media (max-width: 530px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 5px;
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;

  @media (max-width: 1100px) {
    font-size: 11px;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;

  @media (max-width: 1100px) {
    font-size: 15px;
  }

  @media (max-width: 530px) {
    font-size: 14px;
  }
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
