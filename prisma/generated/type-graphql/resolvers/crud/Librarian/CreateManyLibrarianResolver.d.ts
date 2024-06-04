import type { GraphQLResolveInfo } from "graphql";
import { CreateManyLibrarianArgs } from "./args/CreateManyLibrarianArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyLibrarianResolver {
    createManyLibrarian(ctx: any, info: GraphQLResolveInfo, args: CreateManyLibrarianArgs): Promise<AffectedRowsOutput>;
}
