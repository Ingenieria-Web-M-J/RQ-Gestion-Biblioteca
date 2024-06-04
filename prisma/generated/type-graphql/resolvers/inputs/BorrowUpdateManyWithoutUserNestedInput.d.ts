import { BorrowCreateManyUserInputEnvelope } from "../inputs/BorrowCreateManyUserInputEnvelope";
import { BorrowCreateOrConnectWithoutUserInput } from "../inputs/BorrowCreateOrConnectWithoutUserInput";
import { BorrowCreateWithoutUserInput } from "../inputs/BorrowCreateWithoutUserInput";
import { BorrowScalarWhereInput } from "../inputs/BorrowScalarWhereInput";
import { BorrowUpdateManyWithWhereWithoutUserInput } from "../inputs/BorrowUpdateManyWithWhereWithoutUserInput";
import { BorrowUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BorrowUpdateWithWhereUniqueWithoutUserInput";
import { BorrowUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BorrowUpsertWithWhereUniqueWithoutUserInput";
import { BorrowWhereUniqueInput } from "../inputs/BorrowWhereUniqueInput";
export declare class BorrowUpdateManyWithoutUserNestedInput {
    create?: BorrowCreateWithoutUserInput[] | undefined;
    connectOrCreate?: BorrowCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: BorrowUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: BorrowCreateManyUserInputEnvelope | undefined;
    set?: BorrowWhereUniqueInput[] | undefined;
    disconnect?: BorrowWhereUniqueInput[] | undefined;
    delete?: BorrowWhereUniqueInput[] | undefined;
    connect?: BorrowWhereUniqueInput[] | undefined;
    update?: BorrowUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: BorrowUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: BorrowScalarWhereInput[] | undefined;
}
