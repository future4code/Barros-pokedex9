import axios from "axios";
import React, { useEffect, useState } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { ScreenContainer } from "./style";


function PokeListScreen(){
    const[pokemons,setPokemons]=useState([])
useEffect(()=>{
    getPokemons();
}, [])

const getPokemons = () => {
    var endpoints = []
    for (var i = 1; i <= 150; i++){
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    console.log(endpoints);
    var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
   
};




    return(
        
        <ScreenContainer>        
        {pokemons.map((pokemon,key)=> <PokeCard key={key} name={pokemon.data.name} image = {pokemon.data.sprites.front_default}/>)}
        
        </ScreenContainer>
    );
}

export default PokeListScreen;