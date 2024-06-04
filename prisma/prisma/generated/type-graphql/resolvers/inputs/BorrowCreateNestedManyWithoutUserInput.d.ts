import { BorrowCreateManyUserInputEnvelope } from "../inputs/BorrowCreateManyUserInputEnvelope";
import { BorrowCreateOrConnectWithoutUserInput } from "../inputs/BorrowCreateOrConnectWithoutUserInput";
import { BorrowCreateWithoutUserInput } from "../inputs/BorrowCreateWithoutUserInput";
import { BorrowWhereUniqueInput } from "../inputs/BorrowWhereUniqueInput";
export declare class BorrowCreateNestedManyWithoutUserInput {
    create?: BorrowCreateWithoutUserInput[] | undefined;
    connectOrCreate?: BorrowCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: BorrowCreateManyUserInputEnvelope | undefined;
    connect?: BorrowWhereUniqueInput[] | undefined;
}
