import { LibrarianOrderByWithRelationInput } from "../../../inputs/LibrarianOrderByWithRelationInput";
import { LibrarianWhereInput } from "../../../inputs/LibrarianWhereInput";
import { LibrarianWhereUniqueInput } from "../../../inputs/LibrarianWhereUniqueInput";
export declare class AggregateLibrarianArgs {
    where?: LibrarianWhereInput | undefined;
    orderBy?: LibrarianOrderByWithRelationInput[] | undefined;
    cursor?: LibrarianWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
