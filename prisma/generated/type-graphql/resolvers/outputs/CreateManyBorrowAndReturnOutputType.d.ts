import { Book } from "../outputs/Book";
import { User } from "../outputs/User";
export declare class CreateManyBorrowAndReturnOutputType {
    id: string;
    userId: string;
    bookId: string;
    borrowedAt: Date;
    returnedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    book: Book;
}
