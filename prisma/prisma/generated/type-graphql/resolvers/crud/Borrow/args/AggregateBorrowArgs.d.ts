import { BorrowOrderByWithRelationInput } from "../../../inputs/BorrowOrderByWithRelationInput";
import { BorrowWhereInput } from "../../../inputs/BorrowWhereInput";
import { BorrowWhereUniqueInput } from "../../../inputs/BorrowWhereUniqueInput";
export declare class AggregateBorrowArgs {
    where?: BorrowWhereInput | undefined;
    orderBy?: BorrowOrderByWithRelationInput[] | undefined;
    cursor?: BorrowWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
