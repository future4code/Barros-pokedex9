import React from "react";
import {
  ContainerMoves,
  ContainerMovesDetails,
  ContainerType,
} from "./styleCardMoves";

function CardMoves(props) {
  console.log(props.dataPokemom.moves);
    const ListMoves =
    props.dataPokemom &&
    props.dataPokemom.moves.filter((item, idx) => idx < 5).map(item => {
      return <label key={item.move.name}>{item.move.name}</label>;
    });
  const ListTypes =
    props.dataPokemom &&
    props.dataPokemom.types.map((item) => {
      return (
        <label key={item.type.name} >
          {item.slot}-{item.type.name}
        </label>
      );
    });
  return (
    <section>
      <div>{ListTypes}</div>
      <div>
        <h2>Moves</h2>
        {ListMoves}
      </div>
    </section>
  );
}
export default CardMoves;