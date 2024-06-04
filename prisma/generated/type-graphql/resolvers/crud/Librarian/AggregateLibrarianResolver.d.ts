import type { GraphQLResolveInfo } from "graphql";
import { AggregateLibrarianArgs } from "./args/AggregateLibrarianArgs";
import { AggregateLibrarian } from "../../outputs/AggregateLibrarian";
export declare class AggregateLibrarianResolver {
    aggregateLibrarian(ctx: any, info: GraphQLResolveInfo, args: AggregateLibrarianArgs): Promise<AggregateLibrarian>;
}
