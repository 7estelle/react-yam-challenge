import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home/Home";
import Statistics from "./pages/statistics/Statistics";
import Navigation from "./pages/navigation/Navigation";
import { createGlobalStyle } from "styled-components";
import Credits from "./pages/credits/Credits";

function App() {

  const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    html {
      background-color: #0D0C1B ;
    }
    body {
      width: 100%;
      /* margin: 2rem; */
      background-color: #0D0C1B;
      color: #EFFFFA;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      padding: 1.5rem;
      font-family: 'Verdana', sans-serif;

      div{
        position: relative;
      }
    }
  `

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
      <Credits />
    </>
  );
}

export default App;
