import { Photo } from './photo';
import { User } from './user';

export interface Advertisement {
    id: number;
    userId: number;
    name: string;
    createdDate: Date;
    photos?: Photo[];

    type: string;
    describe: string;
    price: number;

    user: User;
}
