import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyBorrowArgs } from "./args/UpdateManyBorrowArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBorrowResolver {
    updateManyBorrow(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBorrowArgs): Promise<AffectedRowsOutput>;
}
