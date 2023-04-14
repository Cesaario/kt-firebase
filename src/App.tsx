import { createContext, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import NovoToite from "./components/NovoToite/NovoToite";
import Toites from "./components/Toites/Toites";
import Usuario from "./components/Usuario/Usuario";
import { obterNomeAleatorio } from "./shared/utils";

export const NomeUsuarioContext = createContext("");

function App() {
  const [nome] = useState(obterNomeAleatorio());

  return (
    <NomeUsuarioContext.Provider value={nome}>
      <div className="App">
        <Banner />
        <NovoToite />
        <Toites />
        <Usuario />
      </div>
    </NomeUsuarioContext.Provider>
  );
}

export default App;
