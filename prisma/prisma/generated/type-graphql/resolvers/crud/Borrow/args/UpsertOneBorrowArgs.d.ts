import { BorrowCreateInput } from "../../../inputs/BorrowCreateInput";
import { BorrowUpdateInput } from "../../../inputs/BorrowUpdateInput";
import { BorrowWhereUniqueInput } from "../../../inputs/BorrowWhereUniqueInput";
export declare class UpsertOneBorrowArgs {
    where: BorrowWhereUniqueInput;
    create: BorrowCreateInput;
    update: BorrowUpdateInput;
}
