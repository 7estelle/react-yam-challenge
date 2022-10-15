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
        <h1>Yam</h1>
        <ul>
            <li>{total}<img src="bitcoin.png"/></li>
        </ul>
      </NavigationContainer>
  );
}

export default Navigation;
