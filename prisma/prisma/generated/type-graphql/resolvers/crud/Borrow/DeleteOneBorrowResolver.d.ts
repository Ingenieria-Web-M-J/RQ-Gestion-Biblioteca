import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneBorrowArgs } from "./args/DeleteOneBorrowArgs";
import { Borrow } from "../../../models/Borrow";
export declare class DeleteOneBorrowResolver {
    deleteOneBorrow(ctx: any, info: GraphQLResolveInfo, args: DeleteOneBorrowArgs): Promise<Borrow | null>;
}
