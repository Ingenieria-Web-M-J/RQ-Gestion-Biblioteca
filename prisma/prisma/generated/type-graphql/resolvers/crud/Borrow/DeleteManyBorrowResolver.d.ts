import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyBorrowArgs } from "./args/DeleteManyBorrowArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBorrowResolver {
    deleteManyBorrow(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBorrowArgs): Promise<AffectedRowsOutput>;
}
