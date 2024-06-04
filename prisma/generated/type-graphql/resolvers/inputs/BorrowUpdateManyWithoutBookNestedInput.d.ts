import { BorrowCreateManyBookInputEnvelope } from "../inputs/BorrowCreateManyBookInputEnvelope";
import { BorrowCreateOrConnectWithoutBookInput } from "../inputs/BorrowCreateOrConnectWithoutBookInput";
import { BorrowCreateWithoutBookInput } from "../inputs/BorrowCreateWithoutBookInput";
import { BorrowScalarWhereInput } from "../inputs/BorrowScalarWhereInput";
import { BorrowUpdateManyWithWhereWithoutBookInput } from "../inputs/BorrowUpdateManyWithWhereWithoutBookInput";
import { BorrowUpdateWithWhereUniqueWithoutBookInput } from "../inputs/BorrowUpdateWithWhereUniqueWithoutBookInput";
import { BorrowUpsertWithWhereUniqueWithoutBookInput } from "../inputs/BorrowUpsertWithWhereUniqueWithoutBookInput";
import { BorrowWhereUniqueInput } from "../inputs/BorrowWhereUniqueInput";
export declare class BorrowUpdateManyWithoutBookNestedInput {
    create?: BorrowCreateWithoutBookInput[] | undefined;
    connectOrCreate?: BorrowCreateOrConnectWithoutBookInput[] | undefined;
    upsert?: BorrowUpsertWithWhereUniqueWithoutBookInput[] | undefined;
    createMany?: BorrowCreateManyBookInputEnvelope | undefined;
    set?: BorrowWhereUniqueInput[] | undefined;
    disconnect?: BorrowWhereUniqueInput[] | undefined;
    delete?: BorrowWhereUniqueInput[] | undefined;
    connect?: BorrowWhereUniqueInput[] | undefined;
    update?: BorrowUpdateWithWhereUniqueWithoutBookInput[] | undefined;
    updateMany?: BorrowUpdateManyWithWhereWithoutBookInput[] | undefined;
    deleteMany?: BorrowScalarWhereInput[] | undefined;
}
