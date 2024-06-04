import { BorrowOrderByWithRelationInput } from "../../../inputs/BorrowOrderByWithRelationInput";
import { BorrowWhereInput } from "../../../inputs/BorrowWhereInput";
import { BorrowWhereUniqueInput } from "../../../inputs/BorrowWhereUniqueInput";
export declare class FindFirstBorrowOrThrowArgs {
    where?: BorrowWhereInput | undefined;
    orderBy?: BorrowOrderByWithRelationInput[] | undefined;
    cursor?: BorrowWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "userId" | "bookId" | "borrowedAt" | "returnedAt" | "createdAt" | "updatedAt"> | undefined;
}
