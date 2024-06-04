import { BorrowOrderByWithAggregationInput } from "../../../inputs/BorrowOrderByWithAggregationInput";
import { BorrowScalarWhereWithAggregatesInput } from "../../../inputs/BorrowScalarWhereWithAggregatesInput";
import { BorrowWhereInput } from "../../../inputs/BorrowWhereInput";
export declare class GroupByBorrowArgs {
    where?: BorrowWhereInput | undefined;
    orderBy?: BorrowOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "userId" | "bookId" | "borrowedAt" | "returnedAt" | "createdAt" | "updatedAt">;
    having?: BorrowScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
