import axios from "axios";
import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom";

export const CollectionNotes = () => {
  // testing purposes only
  const [list, setList] = useState([]);

  return (
    <div>
      <button className="">
        <Outlet />
      </button>
    </div>
  )
}
