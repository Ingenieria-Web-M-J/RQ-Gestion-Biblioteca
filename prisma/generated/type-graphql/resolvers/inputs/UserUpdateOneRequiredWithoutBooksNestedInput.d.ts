import { UserCreateOrConnectWithoutBooksInput } from "../inputs/UserCreateOrConnectWithoutBooksInput";
import { UserCreateWithoutBooksInput } from "../inputs/UserCreateWithoutBooksInput";
import { UserUpdateToOneWithWhereWithoutBooksInput } from "../inputs/UserUpdateToOneWithWhereWithoutBooksInput";
import { UserUpsertWithoutBooksInput } from "../inputs/UserUpsertWithoutBooksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutBooksNestedInput {
    create?: UserCreateWithoutBooksInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput | undefined;
    upsert?: UserUpsertWithoutBooksInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutBooksInput | undefined;
}
