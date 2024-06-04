import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BorrowScalarWhereInput {
    AND?: BorrowScalarWhereInput[] | undefined;
    OR?: BorrowScalarWhereInput[] | undefined;
    NOT?: BorrowScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    bookId?: StringFilter | undefined;
    borrowedAt?: DateTimeFilter | undefined;
    returnedAt?: DateTimeNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
