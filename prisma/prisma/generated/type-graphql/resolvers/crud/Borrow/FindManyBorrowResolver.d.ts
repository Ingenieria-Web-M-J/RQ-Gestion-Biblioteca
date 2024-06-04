import type { GraphQLResolveInfo } from "graphql";
import { FindManyBorrowArgs } from "./args/FindManyBorrowArgs";
import { Borrow } from "../../../models/Borrow";
export declare class FindManyBorrowResolver {
    borrows(ctx: any, info: GraphQLResolveInfo, args: FindManyBorrowArgs): Promise<Borrow[]>;
}
