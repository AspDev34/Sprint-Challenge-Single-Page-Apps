import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 3px solid greenyellow;
`;


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [search, setSearch] = useState('');
const [results, setResults] = useState([]);
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
         .then(res => {
           let characters = res.data.results.filter(char => {
             return char.name.toLowerCase().includes(search.toLowerCase());
           })

           setResults(characters);
         })
         .catch(error => {
           console.log("Sorry nothing returned", error);
         })
  }, [search]); 

  return (
    <section className="character-list">
      {/* <Search search={search} setSearch={setSearch}/>  */}
    
      <SearchForm  setSearch={setSearch}/>

      <CardContainer>
        {results.map(character => {
          return (
            <CharacterCard character={character} />
          
          )
        })}

          
      </CardContainer>
    </section>
  );
}
