import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBorrowArgs } from "./args/FindUniqueBorrowArgs";
import { Borrow } from "../../../models/Borrow";
export declare class FindUniqueBorrowResolver {
    borrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBorrowArgs): Promise<Borrow | null>;
}
