import { BorrowCreateNestedManyWithoutUserInput } from "../inputs/BorrowCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutAccountsInput {
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
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
}
