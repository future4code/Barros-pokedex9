import React from "react";
import { ImageCard } from "./style";

function CardImage(props) {
  console.log(props.dataPoke.sprites);
  return (
    <div>
      <ImageCard>
        <img src={props.dataPoke.sprites.front_default} alt="pokemom" />
        <img src={props.dataPoke.sprites.back_default} alt="pokemom" />
      </ImageCard>
    </div>
  );
}
export default CardImage;
