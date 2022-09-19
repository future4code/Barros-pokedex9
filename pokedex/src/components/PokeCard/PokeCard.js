import React from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { CardContainer, NameText, PriceContainer, ProductImage} from "./styled";

const PokeCard = ({name, image, id}) =>{
    const navigate = useNavigate();
    const detailsPage = ({id}) => {
        navigate("/details/" + {id});
    };

    const [data, isLoading, erro] =
        useRequestData();

    return(
        <CardContainer>
            <ProductImage alt={name} src ={image}/>
            <NameText>{name}</NameText>        
        <PriceContainer>
            <button>Add to Pokedex</button>
            <button onClick={() => detailsPage(data.id)}>View Details</button>
        </PriceContainer>
        </CardContainer>
    )
}

export default PokeCard