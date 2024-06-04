import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBorrowArgs } from "./args/FindFirstBorrowArgs";
import { Borrow } from "../../../models/Borrow";
export declare class FindFirstBorrowResolver {
    findFirstBorrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstBorrowArgs): Promise<Borrow | null>;
}
