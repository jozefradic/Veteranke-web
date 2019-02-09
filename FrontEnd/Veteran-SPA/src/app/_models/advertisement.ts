import { Photo } from './photo';

export interface Advertisement {
    id: number;
    userId: number;
    name: string;
    createdDate: Date;
    photos?: Photo[];
}