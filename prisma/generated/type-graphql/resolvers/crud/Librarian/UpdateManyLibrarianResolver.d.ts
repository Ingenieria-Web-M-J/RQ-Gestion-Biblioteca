import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyLibrarianArgs } from "./args/UpdateManyLibrarianArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyLibrarianResolver {
    updateManyLibrarian(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLibrarianArgs): Promise<AffectedRowsOutput>;
}
