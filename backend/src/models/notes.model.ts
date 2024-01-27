import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    collectionId: { type: mongoose.Schema.Types.ObjectId, required: false },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
