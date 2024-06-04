import type { GraphQLResolveInfo } from "graphql";
import { CreateManyBorrowArgs } from "./args/CreateManyBorrowArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBorrowResolver {
    createManyBorrow(ctx: any, info: GraphQLResolveInfo, args: CreateManyBorrowArgs): Promise<AffectedRowsOutput>;
}
