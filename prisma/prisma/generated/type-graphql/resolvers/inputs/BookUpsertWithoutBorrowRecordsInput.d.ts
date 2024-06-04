import { BookCreateWithoutBorrowRecordsInput } from "../inputs/BookCreateWithoutBorrowRecordsInput";
import { BookUpdateWithoutBorrowRecordsInput } from "../inputs/BookUpdateWithoutBorrowRecordsInput";
import { BookWhereInput } from "../inputs/BookWhereInput";
export declare class BookUpsertWithoutBorrowRecordsInput {
    update: BookUpdateWithoutBorrowRecordsInput;
    create: BookCreateWithoutBorrowRecordsInput;
    where?: BookWhereInput | undefined;
}
