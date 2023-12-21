import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Collection } from "./collection";
import { getCollection } from "./collection.service";
import { formatDateToMonthDayYear } from "../../../utils/date.utils";
import { NotesContent } from "./notes-content";
import { FiHeart } from "react-icons/fi";

export async function loader({ params }: string) {
  const collection = await getCollection(params.collectionId);
  return collection;
}

export const CollectionSingle = () => {
  const [isNoteEditing, setIsNoteStateEditing] = useState(false);
  const collection = useLoaderData() as Collection;

  console.log(collection);
  const date = new Date(collection.createdDate);
  console.log({ date });


  return (
    <>
      <div className="note-action flex justify-between">
        <Link to="/collections" className="bg-cn-secondary py-2 px-3 rounded-lg border border-white hover:border hover:border-cn-accent">Go back</Link>
        <div className="flex items-center"><FiHeart className="mr-3 text-2xl cursor-pointer" />{!isNoteEditing ? <ViewButtonGroup changeEditingState={setIsNoteStateEditing} /> : <EditButtonGroup changeEditingState={setIsNoteStateEditing} />}</div>
      </div>
      { !isNoteEditing ? 
        <div>
          {
            collection ?
              <NotesContent title={collection.title} description={collection.description} createdDate={collection.createdDate} lastModified={collection.lastModified} />
              :
              <p>Loading...</p>
          }
        </div>
        :
        <div className="w-[80%] m-auto text-center pt-5">
          <div className="block size-full text-center mb-5"><input className="rounded border border-gray-800 p-3 text-center text-2xl font-bold text-cn-text-secondary mr-3 block w-[100%]" type="text" value={collection.title} /></div>
          <div className="block size-full"><textarea className="rounded border w-[100%] border-gray-800 p-3" value={collection.description}></textarea></div>
        </div>
      }
    </>
  );
};

interface ButtonGroupProps {
  changeEditingState?: (newState: boolean) => void;
}

const ViewButtonGroup: React.FC<ButtonGroupProps> = ({ changeEditingState }) => {
  return (
    <div className="flex justify-between">
      <button onClick={() => changeEditingState(true)} className="bg-cn-secondary py-2 px-3 rounded-lg border border-white hover:border hover:border-cn-accent">Edit</button>
    </div>
  );
};

const EditButtonGroup: React.FC<ButtonGroupProps> = ({ changeEditingState }) => {
  return (
    <div className="flex justify-between">
      <button className="bg-red-400 text-white py-2 px-3 rounded-lg border border-white hover:border hover:border-cn-accent mr-2">Cancel</button>
      <button onClick={() => changeEditingState(false)} className="bg-cn-secondary py-2 px-3 rounded-lg border border-white hover:border hover:border-cn-accent">Save</button>
    </div>
  );
};

export default CollectionSingle;
