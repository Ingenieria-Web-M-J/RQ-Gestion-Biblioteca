import { BoolFilter } from "../inputs/BoolFilter";
import { BorrowListRelationFilter } from "../inputs/BorrowListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BookWhereInput {
    AND?: BookWhereInput[] | undefined;
    OR?: BookWhereInput[] | undefined;
    NOT?: BookWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    author?: StringFilter | undefined;
    isbn?: StringFilter | undefined;
    available?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    borrowRecords?: BorrowListRelationFilter | undefined;
}
