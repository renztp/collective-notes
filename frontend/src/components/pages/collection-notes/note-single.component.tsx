import React, { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import Editor from "react-simple-wysiwyg";
import { getCollection } from "../../../services/collection.service";
import { Note } from "./note";
import { NotesContent } from "./notes-content.component";

export async function loader({ params }: string) {
  const collection = await getCollection(params.collectionId);
  return collection;
}

export const NoteSingle = () => {
  const [isNoteEditing, setIsNoteStateEditing] = useState(false);
  const collection = useLoaderData() as Note;

  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  useEffect(() => {
    console.log({ noteTitle, noteDescription });
  }, [noteTitle, noteDescription]);

  useEffect(() => {
    setNoteTitle(collection.title);
    setNoteDescription(collection.content);
  }, [collection]);

  function onSave(e: any) {
    e.preventDefault();

    setIsNoteStateEditing(false);
  }


  return (
    <>
      <div className="note-action flex justify-between">
        <Link to="/collections" className="bg-cn-secondary py-2 px-3 rounded-lg border border-white hover:border hover:border-cn-accent">Go back</Link>
        <div className="flex items-center"><FiHeart className="mr-3 text-2xl cursor-pointer" />
          {
            !isNoteEditing
              ? <ViewButtonGroup buttonAction={setIsNoteStateEditing} />
              : <EditButtonGroup buttonAction={onSave} />
          }
        </div>
      </div>
      {!isNoteEditing ?
        <div>
          {
            collection
              ? <NotesContent
                title={collection.title}
                description={collection.content}
                createdDate={collection.createdDate}
                lastModified={collection.lastModified}
              />
              :
              <p>Loading...</p>
          }
        </div>
        :
        <div className="w-[80%] m-auto text-center pt-5">
          <div className="block size-full text-center mb-5"><input onChange={e => setNoteTitle(e.target.value)} className="rounded border border-gray-800 p-3 text-center text-2xl font-bold text-cn-text-secondary mr-3 block w-[100%]" type="text" value={noteTitle} /></div>
          <div className="block size-full">
            <Editor value={noteDescription} onChange={(e) => setNoteDescription(e.target.value)} />
            {/* <textarea className="rounded border w-[100%] border-gray-800 p-3" value={collection.description}> */}
            {/* </textarea> */}
          </div>
        </div>
      }
    </>
  );
};

interface ButtonGroupProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonAction: (state: any) => void;
}

const ViewButtonGroup: React.FC<ButtonGroupProps> = ({ buttonAction }) => {
  return (
    <div className="flex justify-between">
      <button onClick={() => buttonAction(true)} className="bg-cn-secondary py-2 px-3 rounded-lg border border-white hover:border hover:border-cn-accent">Edit</button>
    </div>
  );
};

const EditButtonGroup: React.FC<ButtonGroupProps> = ({ buttonAction }) => {
  return (
    <div className="flex justify-between">
      <button className="bg-red-400 text-white py-2 px-3 rounded-lg border border-white hover:border hover:border-cn-accent mr-2">Cancel</button>
      <button onClick={(e) => buttonAction(e)} className="bg-cn-secondary py-2 px-3 rounded-lg border border-white hover:border hover:border-cn-accent">Save</button>
    </div>
  );
};

export default NoteSingle;
