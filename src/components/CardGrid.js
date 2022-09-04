import React, { useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";
import { shuffleArray } from "./util/CardUtil";

const fetchPokemon = async () => {
  const pokemons = [];
  for (let i = 1; i <= 12; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {
      method: "GET",
      mode: "cors",
    });
    const data = await res.json();
    const dataName = data.name;
    const name =
      dataName.charAt(0).toUpperCase() + dataName.slice(1).toLowerCase();
    const image = data.sprites.other.dream_world.front_default;
    pokemons.push({ name, image });
  }

  return pokemons;
};

const CardGrid = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      const loadPokemon = async () =>
        setPokemons(shuffleArray(await fetchPokemon()));

      loadPokemon();
    }

    return () => {
      subscribe = false;
    };
  }, []);

  return (
    <Wrapper>
      {pokemons.map((pokemon) => {
        return (
          <Card
            name={pokemon.name}
            image={pokemon.image}
            setPokemons={setPokemons}
            pokemons={pokemons}
          ></Card>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 50px 30px;
  display: grid;
  grid-template-columns: repeat(6, max-content);
  place-content: center;
  gap: 20px;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, max-content);
  }
`;

export default CardGrid;
