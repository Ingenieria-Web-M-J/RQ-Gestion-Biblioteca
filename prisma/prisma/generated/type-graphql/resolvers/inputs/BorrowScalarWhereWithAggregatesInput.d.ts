import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BorrowScalarWhereWithAggregatesInput {
    AND?: BorrowScalarWhereWithAggregatesInput[] | undefined;
    OR?: BorrowScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BorrowScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    bookId?: StringWithAggregatesFilter | undefined;
    borrowedAt?: DateTimeWithAggregatesFilter | undefined;
    returnedAt?: DateTimeNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
