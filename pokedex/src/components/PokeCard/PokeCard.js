import React from "react";
import { CardContainer, NameText, PriceContainer, ProductImage} from "./styled";

const PokeCard = ({name, image}) =>{
    return(
        <CardContainer>
            <ProductImage alt={name} src ={image}/>
            <NameText>{name}</NameText>        
        <PriceContainer>
            <button>Add to Pokedex</button>
            <button>View Details</button>
        </PriceContainer>
        </CardContainer>
    )
}

export default PokeCard