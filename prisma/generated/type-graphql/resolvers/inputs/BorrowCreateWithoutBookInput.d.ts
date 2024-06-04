import { UserCreateNestedOneWithoutBooksInput } from "../inputs/UserCreateNestedOneWithoutBooksInput";
export declare class BorrowCreateWithoutBookInput {
    id?: string | undefined;
    borrowedAt?: Date | undefined;
    returnedAt?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user: UserCreateNestedOneWithoutBooksInput;
}
