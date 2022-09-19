import React from "react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";
import { ScreenContainer} from "./style";

function Home() {
   const [data, isLoading, erro] = useRequestData(
    `${BASE_URL}`
  );
  console.log(data);
  const ListPkemom =
    !isLoading &&
    data &&
    data.results.map((item) => {
      return (
        <CardPokemon key={item.id} namePokemom={item.name} url={item.url} idPokemom={item.id}/>
      );
    });


  return (
    <>
      
      <ScreenContainer>
        {isLoading && <h3>Carregando...</h3>}
        {!isLoading && data && ListPkemom}
        {!isLoading && !data && erro}        
      </ScreenContainer>
    </>
  );
}
export default Home;
