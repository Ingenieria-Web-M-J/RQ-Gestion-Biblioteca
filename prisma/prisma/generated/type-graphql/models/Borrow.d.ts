import { Book } from "../models/Book";
import { User } from "../models/User";
export declare class Borrow {
    id: string;
    user?: User;
    userId: string;
    book?: Book;
    bookId: string;
    borrowedAt: Date;
    returnedAt?: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
