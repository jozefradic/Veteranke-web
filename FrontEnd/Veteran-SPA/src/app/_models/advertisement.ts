import { Photo } from './photo';
import { User } from './user';
import { Category } from './category';

export interface Advertisement {
    id: number;
    userId: number;
    name: string;
    createdDate: Date;
    photos?: Photo[];

    type: string;
    describe: string;
    price: number;
    year: string;

    user: User;
    category: Category;
}
