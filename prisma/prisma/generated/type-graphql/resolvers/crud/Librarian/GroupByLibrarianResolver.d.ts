import type { GraphQLResolveInfo } from "graphql";
import { GroupByLibrarianArgs } from "./args/GroupByLibrarianArgs";
import { LibrarianGroupBy } from "../../outputs/LibrarianGroupBy";
export declare class GroupByLibrarianResolver {
    groupByLibrarian(ctx: any, info: GraphQLResolveInfo, args: GroupByLibrarianArgs): Promise<LibrarianGroupBy[]>;
}
