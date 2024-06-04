import type { GraphQLResolveInfo } from "graphql";
import { GroupByBorrowArgs } from "./args/GroupByBorrowArgs";
import { BorrowGroupBy } from "../../outputs/BorrowGroupBy";
export declare class GroupByBorrowResolver {
    groupByBorrow(ctx: any, info: GraphQLResolveInfo, args: GroupByBorrowArgs): Promise<BorrowGroupBy[]>;
}
