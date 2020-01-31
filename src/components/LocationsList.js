import React, { useEffect, useState } from "react";
import Search from './SearchForm';
import LocationCard from './LocationCard';
import styled from 'styled-components';
import axios from 'axios';

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border: 2px dashed greenyellow;
`;

export default function LocationsList(props) {

const {setLocID} = props;
const [search, setSearch] = useState([]);
const [locResults, setLocResults] = useState ([]);

useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        let locations = res.data.results.filter(loc =>{
          return loc.name.toLowerCase().includes(search.toLowerCase());
        })
        setLocResults(locations);
    })
        .catch(error => {
          console.log('Your request was not returned', error);
      })
  }, [locResults]);

  return (
    <section className="character-list">
      <Search search={search} setSearch={setSearch}/>

      <CardContainer>{locResults.map(loc =>{

        return <LocationCard loc={loc} setLocID={setLocID}/>
      })}</CardContainer>

    </section>
  );

}
