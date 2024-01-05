import axios from "axios";

export const BASE_URL = "http://localhost:3000/notes";

export const getNotesByCollectionId = async (collectionId: string) => {
  try {
    const res = await axios(`${BASE_URL}/${collectionId}/notes`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getNoteById = async (noteId: string) => {
  try {
    const res = await axios(`${BASE_URL}/${noteId}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getNotes = async () => {
  try {
    const res = await axios(BASE_URL);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
