import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { LibrarianWhereInput } from "../inputs/LibrarianWhereInput";
import { StringFilter } from "../inputs/StringFilter";
export declare class LibrarianWhereUniqueInput {
    id?: string | undefined;
    email?: string | undefined;
    AND?: LibrarianWhereInput[] | undefined;
    OR?: LibrarianWhereInput[] | undefined;
    NOT?: LibrarianWhereInput[] | undefined;
    name?: StringFilter | undefined;
    password?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
