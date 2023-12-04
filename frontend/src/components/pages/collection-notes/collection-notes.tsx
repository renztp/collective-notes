import { useState } from "react"

export const CollectionNotes = () => {
  // testing purposes only
  const [list, setList] = useState([]);

  return (
    <div>
      <button className="bg-sky-700">
        <span className="text-white">Hello, World!</span>
      </button>
    </div>
  )
}
