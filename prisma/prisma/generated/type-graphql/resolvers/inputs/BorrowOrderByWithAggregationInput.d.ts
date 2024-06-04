import { BorrowCountOrderByAggregateInput } from "../inputs/BorrowCountOrderByAggregateInput";
import { BorrowMaxOrderByAggregateInput } from "../inputs/BorrowMaxOrderByAggregateInput";
import { BorrowMinOrderByAggregateInput } from "../inputs/BorrowMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class BorrowOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    bookId?: "asc" | "desc" | undefined;
    borrowedAt?: "asc" | "desc" | undefined;
    returnedAt?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: BorrowCountOrderByAggregateInput | undefined;
    _max?: BorrowMaxOrderByAggregateInput | undefined;
    _min?: BorrowMinOrderByAggregateInput | undefined;
}
