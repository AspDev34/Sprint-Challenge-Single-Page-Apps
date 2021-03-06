import React from "react";
import Header from "./components/Header.js";
import {Route} from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import styled from 'styled-components';





export default function App() {

  

  return (
    <main>
      <Header />

      <Route exact path="/">
        <WelcomePage />
      </Route>

      <Route path="/characters">
        <CharacterList />
      </Route>

    

    </main>
  );
}
