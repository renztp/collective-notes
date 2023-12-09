import axios from "axios";
import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom";

export const CollectionNotes = () => {
  // testing purposes only
  const [list, setList] = useState([]);

  useEffect(() => {
    async () => {
      const pokemon = axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(res => res.data);
      console.log(pokemon)
      return pokemon;
    }
  }, [])

  return (
    <div>
      <button className="">
        <Outlet />
      </button>
    </div>
  )
}
