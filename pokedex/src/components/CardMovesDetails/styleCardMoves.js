import styled from "styled-components";

export const ContainerMovesDetails = styled.section`
  margin: 0 3%;
`;

export const ContainerType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2vw 0 1vw 0;
  min-width: 35vw;
  padding: 2% 0;
  font-size: 200%;
  text-align: center;
  
  border-left: 3px solid #b3404a;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 3vh 0;
    label {
      margin: 3% 0;
    }
  }
`;
export const ContainerMoves = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  /* min-height: 50vh;  */
  
  transition: all 0.3s ease-out;
  
  font-size: 200%;
  label {
    margin: 2%;
  }
  @media(max-width: 1280px) {
    height: 70vh;
    label {
    margin: 3%;
  }
  }
  @media (max-width: 800px) {
    height: auto;
    text-align: center;
    margin-bottom: 20%;
  }
`;
