import React, { useEffect } from "react";

export default function SearchForm(props) {
 

const handleChange = event => {
  props.setSearch(event.target.value);
}



return (

<form>
  <label htmlFor="search">
    <input type="text" onChange={handleChange} name="search" placeholder="enter search value"/>
  </label>
</form>






);

};
