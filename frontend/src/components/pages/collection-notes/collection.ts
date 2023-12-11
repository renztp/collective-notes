export interface Collection {
  id: string;
  createdDate: Date;
  lastModified: Date;
  title: string;
  description: string;
}

export interface CollectionSummary extends Collection {
  ownerId: string;
}
