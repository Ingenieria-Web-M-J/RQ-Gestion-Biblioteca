import { BookCreateNestedOneWithoutBorrowRecordsInput } from "../inputs/BookCreateNestedOneWithoutBorrowRecordsInput";
export declare class BorrowCreateWithoutUserInput {
    id?: string | undefined;
    borrowedAt?: Date | undefined;
    returnedAt?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    book: BookCreateNestedOneWithoutBorrowRecordsInput;
}
