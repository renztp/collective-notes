import { useLoaderData } from "react-router-dom";
import { getCollection } from "./collection.service";
import { Collection } from "./collection";

export async function loader({params}: string) {
  const collection = await getCollection(params.collectionId); 
  console.log({ collection })
  return collection;
}

export const CollectionSingle = () => {
  const collection: Collection = useLoaderData();

  console.log(collection);
  return (
    <div>{collection ? <div>
      <h1>{collection.title}</h1>
    </div> : <p>Loading...</p>}</div>
  )
}

export default CollectionSingle;