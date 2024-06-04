import { BookCreateNestedOneWithoutBorrowRecordsInput } from "../inputs/BookCreateNestedOneWithoutBorrowRecordsInput";
import { UserCreateNestedOneWithoutBooksInput } from "../inputs/UserCreateNestedOneWithoutBooksInput";
export declare class BorrowCreateInput {
    id?: string | undefined;
    borrowedAt?: Date | undefined;
    returnedAt?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user: UserCreateNestedOneWithoutBooksInput;
    book: BookCreateNestedOneWithoutBorrowRecordsInput;
}
