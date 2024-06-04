import { Borrow } from "../models/Borrow";
import { BookCount } from "../resolvers/outputs/BookCount";
export declare class Book {
    id: string;
    title: string;
    author: string;
    isbn: string;
    available: boolean;
    borrowRecords?: Borrow[];
    createdAt: Date;
    updatedAt: Date;
    _count?: BookCount | null;
}
