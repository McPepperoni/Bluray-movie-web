import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Title = styled.h1`
  width: 100%;
  color: white;
  font-size: calc(50px + 1.5vw);
  text-align: center;
  font-weight: 500;
`;
export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;
export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;
export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
`;
export const Item = styled.li`
  box-sizing: border-box;
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;
  cursor: pointer;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
