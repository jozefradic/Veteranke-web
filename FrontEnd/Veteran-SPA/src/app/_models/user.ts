import { Photo } from './photo';

export interface User {
    id: number;
    name: string;
    age: number;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    photos?: Photo[];
}
