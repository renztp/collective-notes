const BASE_URL = 'http://localhost:3000/collections';
import axios from 'axios';

export async function getCollection(collectionId: string): Promise<any> {
  try {
    const res = await axios(`${BASE_URL}/${collectionId}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getNotesByCollectionId(collectionId: string): Promise<any> {
  try {
    const res = await axios(`${BASE_URL}/${collectionId}/notes`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllCollections(): Promise<any> {
  try {
    const res = await axios(BASE_URL);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

interface NoteData {
  id: string;
  title: string;
  description: string;
}

export async function updateNote(noteData: NoteData): Promise<any> {
  try {
    const res = await axios.put(`${BASE_URL}/${noteData.id}`, noteData);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
