import type { GraphQLResolveInfo } from "graphql";
import { CreateOneBorrowArgs } from "./args/CreateOneBorrowArgs";
import { Borrow } from "../../../models/Borrow";
export declare class CreateOneBorrowResolver {
    createOneBorrow(ctx: any, info: GraphQLResolveInfo, args: CreateOneBorrowArgs): Promise<Borrow>;
}
