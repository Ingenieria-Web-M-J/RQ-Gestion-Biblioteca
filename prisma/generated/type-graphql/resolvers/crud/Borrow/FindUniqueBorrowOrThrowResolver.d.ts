import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBorrowOrThrowArgs } from "./args/FindUniqueBorrowOrThrowArgs";
import { Borrow } from "../../../models/Borrow";
export declare class FindUniqueBorrowOrThrowResolver {
    getBorrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBorrowOrThrowArgs): Promise<Borrow | null>;
}
