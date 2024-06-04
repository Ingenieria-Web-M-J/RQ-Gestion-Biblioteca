import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BookScalarWhereWithAggregatesInput {
    AND?: BookScalarWhereWithAggregatesInput[] | undefined;
    OR?: BookScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BookScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    author?: StringWithAggregatesFilter | undefined;
    isbn?: StringWithAggregatesFilter | undefined;
    available?: BoolWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
