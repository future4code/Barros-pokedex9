import React from "react";
import {useParams } from "react-router-dom";
import CardImage from "../../components/CardImage/CardImage";
import CardMoves from "../../components/CardMoves/CardMoves";
import CardStats from "../../components/CardStatsDetails/CardStats";

import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";

import { ContainerBody } from "./style";

function Details() {
    
    
    const pathParams = useParams();
    
    const [data, isLoading] =
    useRequestData(`${BASE_URL}`+pathParams.id);
      
    return(
        <>
        
        <ContainerBody>
        {!isLoading&&data &&<CardImage dataPoke={data}/>}
        {!isLoading&&data &&<CardStats dataPokemom={data}/>}
        {!isLoading&&data &&<CardMoves dataPoke={data}/>}
        </ContainerBody>
        </>

    )

}

export default Details;