const BASE_URL = 'http://localhost:3000/collections';
import axios from 'axios';

export async function getCollection(collectionId: string) {
  return await axios(`${BASE_URL}/${collectionId}`).then((res) => res.data);
}

export async function getAllCollections() {
  return await axios(BASE_URL).then((res) => res.data);
}
