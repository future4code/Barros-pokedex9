import React from "react";
import { CardContainer, NameText, PriceContainer, ProductImage} from "../CardPokemon/style"
import useRequestData from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";


function CardPokemon(props) {
    const navigate = useNavigate();
    const detailsPage = (id) => {
        navigate("/details/" + id);
    };

        const [data, isLoading] =
        useRequestData(`${props.url}`);  
    
    
    return (
        <CardContainer>
            <ProductImage src={!isLoading && data && data.sprites.front_default} alt="Imagem do Pokemon"></ProductImage>
            <NameText>{props.namePokemom}</NameText>
            <PriceContainer>
            <button>Add to Pokedex</button>
            <button onClick={() => detailsPage(data.id)}>View Details</button>
            </PriceContainer>
        </CardContainer>
    )
}

export default CardPokemon;