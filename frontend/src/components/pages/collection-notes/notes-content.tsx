import React from 'react'
import { formatDateToMonthDayYear } from '../../../utils/date.utils';

interface NotesContentProps {
  title: string;
  description: string;
  createdDate: Date;
  lastModified: Date;
}

export const NotesContent: React.FC<NotesContentProps> = ({ title, description, createdDate, lastModified }) => {
  return (
    <div className="xl:w-10/12 xl:m-auto">
      <h1 className="block text-center text-2xl font-semibold mb-2">{title}</h1>
      <div className="meta flex w-100 text-center justify-center text-gray-500 italic">
        <p className="text-center text-sm text-cn-text-secondary mr-3">Created: {formatDateToMonthDayYear(createdDate)}</p>
        <p className="text-center text-sm text-cn-text-secondary">Last updated: {formatDateToMonthDayYear(lastModified)}</p>
      </div>
      <p className="text-center mt-10 text-lg">{description}</p>
    </div>
  )
}
