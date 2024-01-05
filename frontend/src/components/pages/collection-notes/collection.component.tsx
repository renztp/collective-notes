import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getCollection } from '../../../services/collection.service';
import { Collection } from './collection';
import { getNotesByCollectionId } from '../../../services/collection.service';
import { Note } from './note';
import { shortenParagraph } from '../../../utils/text.utils';
import { Link } from 'react-router-dom';

export async function loader({ params }: string) {
  const collection = await getCollection(params.collectionId);
  return collection;
}

async function getNotes(collectionId: string): Promise<Note[]> {
  const notes = await getNotesByCollectionId(collectionId);
  return notes;
}

export const CollectionComponent = () => {
  const [notes, setNotes] = React.useState<Note[]>([]);
  const collection = useLoaderData() as Collection;

  async function loadData() {
    const notes = await getNotes(collection.id);

    if (notes.length > 0) {
      setNotes(notes);
    }
  }

  useEffect(() => {
    loadData();
  }, [])

  const NoteItem: React.FC<Note> = ({ ...note }) => {
    return(
      <Link to={`/collection/${note.id}`} key={note.id} className="bg-cn-secondary rounded-md h-48 p-5 border-cn-primary border hover:border-cn-accent relative">
        <h3 className="font-medium text-lg mb-2">{note.title}</h3>
        <p className="text-md">{shortenParagraph(note.content, 95)}</p>

        <div className="absolute bottom-5 w-full">
          <div className="flex justify-between mr-10">
            <p className="text-sm">notes</p>
            <p className="text-sm">actions</p>
          </div>
        </div>
      </Link>
    )
  }

  const NoContentFound: React.FC<{ message: string; }> = ({ message }) => {
    return (
      <p>{message}</p>
    );
  }

  return collection && (
    <div>
      <div className='mb-5'>
        <h1 className="text-2xl font-semibold">{collection.title}</h1>
        <p>{collection.description}</p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {notes.length > 0 ? notes.map((note: Note) => <NoteItem key={note.id} {...note} /> ) : <NoContentFound message="No notes found" />}
      </div>
    </div>
  )
};

export default CollectionComponent;
