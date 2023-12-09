import { useLoaderData } from "react-router-dom";
import { getCollection } from "./collection.service";
import { Collection } from "./collection";

export async function loader({params}: string) {
  const collection = await getCollection(params.collectionId); 
  return collection;
}

export const CollectionSingle = () => {
  const collection = useLoaderData() as Collection;

  console.log(collection);
  return (
    <div>{collection ? <div>
      <h1 className="block text-center text-2xl font-semibold mb-4">{collection.title}</h1>

      <p className="text-center">{collection.description}</p>
    </div> : <p>Loading...</p>}</div>
  )
}

export default CollectionSingle;