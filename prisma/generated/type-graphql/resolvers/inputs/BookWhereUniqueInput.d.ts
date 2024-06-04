import { BookWhereInput } from "../inputs/BookWhereInput";
import { BoolFilter } from "../inputs/BoolFilter";
import { BorrowListRelationFilter } from "../inputs/BorrowListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BookWhereUniqueInput {
    id?: string | undefined;
    isbn?: string | undefined;
    AND?: BookWhereInput[] | undefined;
    OR?: BookWhereInput[] | undefined;
    NOT?: BookWhereInput[] | undefined;
    title?: StringFilter | undefined;
    author?: StringFilter | undefined;
    available?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    borrowRecords?: BorrowListRelationFilter | undefined;
}
