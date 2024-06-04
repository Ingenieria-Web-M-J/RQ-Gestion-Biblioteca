import { BookCountBorrowRecordsArgs } from "./args/BookCountBorrowRecordsArgs";
export declare class BookCount {
    borrowRecords: number;
    getBorrowRecords(root: BookCount, args: BookCountBorrowRecordsArgs): number;
}
