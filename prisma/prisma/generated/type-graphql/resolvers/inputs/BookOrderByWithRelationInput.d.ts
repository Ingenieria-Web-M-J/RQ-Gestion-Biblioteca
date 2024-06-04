import { BorrowOrderByRelationAggregateInput } from "../inputs/BorrowOrderByRelationAggregateInput";
export declare class BookOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    author?: "asc" | "desc" | undefined;
    isbn?: "asc" | "desc" | undefined;
    available?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    borrowRecords?: BorrowOrderByRelationAggregateInput | undefined;
}
