import { LibrarianOrderByWithRelationInput } from "../../../inputs/LibrarianOrderByWithRelationInput";
import { LibrarianWhereInput } from "../../../inputs/LibrarianWhereInput";
import { LibrarianWhereUniqueInput } from "../../../inputs/LibrarianWhereUniqueInput";
export declare class FindManyLibrarianArgs {
    where?: LibrarianWhereInput | undefined;
    orderBy?: LibrarianOrderByWithRelationInput[] | undefined;
    cursor?: LibrarianWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt"> | undefined;
}
