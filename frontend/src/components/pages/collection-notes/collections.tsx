import { useEffect, useState } from "react";
import { getAllCollections } from "./collection.service";
import { Collection } from "./collection";
import { Link } from "react-router-dom";

async function getCollections(): Promise<Collection[]> {
  return await getAllCollections();
}

export const Collections = () => {
  const [collections, useCollections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collections = await getCollections();
      if (collections.length > 0) {
        useCollections(collections);
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Collections</h1>
      <div className="grid grid-cols-3 gap-8">
        {
          collections.length > 0 && collections.map((collection: Collection) => (
            <Link to={`/collection/${collection.id}`} key={collection.id} className="bg-cn-secondary rounded-md h-48 p-5 border-cn-primary border hover:border-cn-accent relative">
              <h3 className="font-medium text-lg mb-2">{collection.title}</h3>
              <p className="text-md">{collection.description}</p>

              <div className="absolute bottom-5 w-full">
                <div className="flex justify-between mr-10">
                  <p className="text-sm">notes</p>
                  <p className="text-sm">actions</p>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
