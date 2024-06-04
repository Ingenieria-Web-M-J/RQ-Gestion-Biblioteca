import type { GraphQLResolveInfo } from "graphql";
import { Book } from "../../../models/Book";
import { Borrow } from "../../../models/Borrow";
import { BookBorrowRecordsArgs } from "./args/BookBorrowRecordsArgs";
export declare class BookRelationsResolver {
    borrowRecords(book: Book, ctx: any, info: GraphQLResolveInfo, args: BookBorrowRecordsArgs): Promise<Borrow[]>;
}
