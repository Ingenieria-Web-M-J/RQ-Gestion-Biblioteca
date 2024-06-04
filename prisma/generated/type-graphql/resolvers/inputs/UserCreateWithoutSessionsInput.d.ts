import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { BorrowCreateNestedManyWithoutUserInput } from "../inputs/BorrowCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutSessionsInput {
    id?: string | undefined;
    name?: string | undefined;
    email: string;
    password: string;
    role: "ADMIN" | "USER";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    books?: BorrowCreateNestedManyWithoutUserInput | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
}
