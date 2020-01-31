import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [search, setSearch] = useState('');
const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
         .then(res => {
           console.log('RES', res)
         })
         .catch(error => {
           console.log("Sorry nothing returned", error);
         })
  }, []); 

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
