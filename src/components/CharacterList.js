import React, { useEffect, useState } from "react";
import axios from 'axios';
import Search from './SearchForm';
import CharacterCard from './CharacterCard';

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
      <Search search={search} setSearch={setSearch}/> 
    

      <cardContainer>
        {results.map(char => {
          return (
            <CharacterCard character={char} />
          )
        })}

      </cardContainer>
    </section>
  );
}
