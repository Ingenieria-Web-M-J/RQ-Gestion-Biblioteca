import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { BorrowWhereInput } from "../inputs/BorrowWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class BorrowWhereUniqueInput {
    id?: string | undefined;
    AND?: BorrowWhereInput[] | undefined;
    OR?: BorrowWhereInput[] | undefined;
    NOT?: BorrowWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    bookId?: StringFilter | undefined;
    borrowedAt?: DateTimeFilter | undefined;
    returnedAt?: DateTimeNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    user?: UserRelationFilter | undefined;
    book?: BookRelationFilter | undefined;
}
