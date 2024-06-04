import { UserCreateOrConnectWithoutBooksInput } from "../inputs/UserCreateOrConnectWithoutBooksInput";
import { UserCreateWithoutBooksInput } from "../inputs/UserCreateWithoutBooksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutBooksInput {
    create?: UserCreateWithoutBooksInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
