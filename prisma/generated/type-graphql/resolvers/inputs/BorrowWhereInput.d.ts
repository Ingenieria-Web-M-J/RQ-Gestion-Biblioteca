import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class BorrowWhereInput {
    AND?: BorrowWhereInput[] | undefined;
    OR?: BorrowWhereInput[] | undefined;
    NOT?: BorrowWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    bookId?: StringFilter | undefined;
    borrowedAt?: DateTimeFilter | undefined;
    returnedAt?: DateTimeNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    user?: UserRelationFilter | undefined;
    book?: BookRelationFilter | undefined;
}
