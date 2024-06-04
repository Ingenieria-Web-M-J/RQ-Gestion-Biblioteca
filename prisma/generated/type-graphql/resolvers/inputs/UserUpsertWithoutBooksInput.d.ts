import { UserCreateWithoutBooksInput } from "../inputs/UserCreateWithoutBooksInput";
import { UserUpdateWithoutBooksInput } from "../inputs/UserUpdateWithoutBooksInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutBooksInput {
    update: UserUpdateWithoutBooksInput;
    create: UserCreateWithoutBooksInput;
    where?: UserWhereInput | undefined;
}
