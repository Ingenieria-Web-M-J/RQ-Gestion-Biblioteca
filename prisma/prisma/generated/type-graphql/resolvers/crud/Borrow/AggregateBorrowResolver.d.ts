import type { GraphQLResolveInfo } from "graphql";
import { AggregateBorrowArgs } from "./args/AggregateBorrowArgs";
import { AggregateBorrow } from "../../outputs/AggregateBorrow";
export declare class AggregateBorrowResolver {
    aggregateBorrow(ctx: any, info: GraphQLResolveInfo, args: AggregateBorrowArgs): Promise<AggregateBorrow>;
}
