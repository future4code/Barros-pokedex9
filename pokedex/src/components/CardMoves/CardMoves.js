import React from "react";
import {
  Container,
  ContainerMoves,
  Type,
} from "./style";

function CardMoves(props) {
  console.log(props.dataPoke.moves);
    const ListMoves =
    props.dataPoke &&
    props.dataPoke.moves.filter((item, idpoke) => idpoke < 6).map(item => {
      return <label key={item.move.name}>{item.move.name}</label>;
    });
  const ListTypes =
    props.dataPoke &&
    props.dataPoke.types.map((item) => {
      return (
        <label key={item.type.name} >
          {item.slot}-{item.type.name}
        </label>
      );
    });
  return (
    <ContainerMoves>
      <Type>{ListTypes}</Type>
      <Container>
        <h2>Moves</h2>
        {ListMoves}
      </Container>
    </ContainerMoves>
  );
}
export default CardMoves;
