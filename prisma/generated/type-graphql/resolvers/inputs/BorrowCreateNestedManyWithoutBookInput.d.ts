import { BorrowCreateManyBookInputEnvelope } from "../inputs/BorrowCreateManyBookInputEnvelope";
import { BorrowCreateOrConnectWithoutBookInput } from "../inputs/BorrowCreateOrConnectWithoutBookInput";
import { BorrowCreateWithoutBookInput } from "../inputs/BorrowCreateWithoutBookInput";
import { BorrowWhereUniqueInput } from "../inputs/BorrowWhereUniqueInput";
export declare class BorrowCreateNestedManyWithoutBookInput {
    create?: BorrowCreateWithoutBookInput[] | undefined;
    connectOrCreate?: BorrowCreateOrConnectWithoutBookInput[] | undefined;
    createMany?: BorrowCreateManyBookInputEnvelope | undefined;
    connect?: BorrowWhereUniqueInput[] | undefined;
}
