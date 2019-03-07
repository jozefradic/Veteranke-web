import { Photo } from './photo';

export interface Album {
    id: number;
    name: string;
    createdDate: Date;
    photos?: Photo[];
  }
