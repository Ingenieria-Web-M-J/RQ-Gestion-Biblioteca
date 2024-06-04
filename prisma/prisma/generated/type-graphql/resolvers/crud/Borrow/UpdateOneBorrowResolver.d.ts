import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneBorrowArgs } from "./args/UpdateOneBorrowArgs";
import { Borrow } from "../../../models/Borrow";
export declare class UpdateOneBorrowResolver {
    updateOneBorrow(ctx: any, info: GraphQLResolveInfo, args: UpdateOneBorrowArgs): Promise<Borrow | null>;
}
