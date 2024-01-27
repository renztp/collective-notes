import Note from '../models/notes.model.js';

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    res.status(200).json(note);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getNotesByCollectionId = async (req, res) => {
  const { id } = req.params;
  try {
    const notes = await Note.find({ collectionId: id });
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
