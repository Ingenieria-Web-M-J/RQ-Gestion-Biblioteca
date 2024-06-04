import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneBorrowArgs } from "./args/UpsertOneBorrowArgs";
import { Borrow } from "../../../models/Borrow";
export declare class UpsertOneBorrowResolver {
    upsertOneBorrow(ctx: any, info: GraphQLResolveInfo, args: UpsertOneBorrowArgs): Promise<Borrow>;
}
