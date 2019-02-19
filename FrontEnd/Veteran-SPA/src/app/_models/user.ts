import { Photo } from './photo';

export interface User {
    id: number;
    userName: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    email: string;
    phone: number;
    firstName: string;
    lastName: string;
    photos?: Photo[];
}
