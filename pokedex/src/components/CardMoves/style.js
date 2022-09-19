import styled from "styled-components";

export const ContainerMoves = styled.section`
  margin: 0 3%;
`;

export const Type = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2vw 0 1vw 0;
  min-width: 35vw;
  padding: 2% 0;
  font-size: 200%;
  text-align: center;
  border: 2px solid black;
  
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  
  border: 2px solid black;
  transition: all 0.3s ease-out;
  
  font-size: 200%;
  label {
    margin: 2%;
  }
  
`;
