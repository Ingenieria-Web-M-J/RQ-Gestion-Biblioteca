import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyLibrarianArgs } from "./args/DeleteManyLibrarianArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyLibrarianResolver {
    deleteManyLibrarian(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLibrarianArgs): Promise<AffectedRowsOutput>;
}
