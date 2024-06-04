import type { GraphQLResolveInfo } from "graphql";
import { Book } from "../../../models/Book";
import { Borrow } from "../../../models/Borrow";
import { User } from "../../../models/User";
export declare class BorrowRelationsResolver {
    user(borrow: Borrow, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    book(borrow: Borrow, ctx: any, info: GraphQLResolveInfo): Promise<Book>;
}
