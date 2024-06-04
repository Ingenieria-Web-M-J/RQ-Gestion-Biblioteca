import { LibrarianOrderByWithAggregationInput } from "../../../inputs/LibrarianOrderByWithAggregationInput";
import { LibrarianScalarWhereWithAggregatesInput } from "../../../inputs/LibrarianScalarWhereWithAggregatesInput";
import { LibrarianWhereInput } from "../../../inputs/LibrarianWhereInput";
export declare class GroupByLibrarianArgs {
    where?: LibrarianWhereInput | undefined;
    orderBy?: LibrarianOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt">;
    having?: LibrarianScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
