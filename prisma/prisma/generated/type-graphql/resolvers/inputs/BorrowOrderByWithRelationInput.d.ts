import { BookOrderByWithRelationInput } from "../inputs/BookOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class BorrowOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    bookId?: "asc" | "desc" | undefined;
    borrowedAt?: "asc" | "desc" | undefined;
    returnedAt?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    book?: BookOrderByWithRelationInput | undefined;
}
