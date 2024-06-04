import { BorrowCreateNestedManyWithoutBookInput } from "../inputs/BorrowCreateNestedManyWithoutBookInput";
export declare class BookCreateInput {
    id?: string | undefined;
    title: string;
    author: string;
    isbn: string;
    available?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    borrowRecords?: BorrowCreateNestedManyWithoutBookInput | undefined;
}
