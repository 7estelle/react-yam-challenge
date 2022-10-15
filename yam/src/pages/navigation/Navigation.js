import { Routes, Route, NavLink } from "react-router-dom";
import { NavigationContainer, NavElement } from "./Navigation.styles.ts";
import { useState } from "react";
import { useSelector } from 'react-redux';

function Navigation() {

    const { total } = useSelector(state => state.game.totalResults);
    const [ active, setActive ] = useState();
    console.log(active);
  return (
      <NavigationContainer>
        <ul>
          <NavElement onClick= {() => setActive(true)} active={active}>
            <NavLink to="/">Home</NavLink>
          </NavElement>
          <NavElement onClick= {() => setActive(false)} active={active}>
            <NavLink to="/statistics">Statistiques</NavLink>
          </NavElement>
        </ul>
        <ul>
            <li>Votre total : {total}</li>
        </ul>
      </NavigationContainer>
  );
}

export default Navigation;
