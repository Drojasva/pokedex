import {Link} from "react-router-dom";
import pikachu from "../assets/charmander.main.png"

export const Home = () => {
  return (
    <div className="mt-5">
      <main className="text-center">
        <h1>¡POKEDEX!</h1>
        <img src={pikachu} alt="Pokeball" style={{width: "250px"}}/>
      </main>
    </div>
);
};