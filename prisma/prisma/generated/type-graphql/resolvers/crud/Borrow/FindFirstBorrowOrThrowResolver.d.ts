import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBorrowOrThrowArgs } from "./args/FindFirstBorrowOrThrowArgs";
import { Borrow } from "../../../models/Borrow";
export declare class FindFirstBorrowOrThrowResolver {
    findFirstBorrowOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstBorrowOrThrowArgs): Promise<Borrow | null>;
}
