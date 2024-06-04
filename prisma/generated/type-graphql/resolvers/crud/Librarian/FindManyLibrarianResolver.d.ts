import type { GraphQLResolveInfo } from "graphql";
import { FindManyLibrarianArgs } from "./args/FindManyLibrarianArgs";
import { Librarian } from "../../../models/Librarian";
export declare class FindManyLibrarianResolver {
    librarians(ctx: any, info: GraphQLResolveInfo, args: FindManyLibrarianArgs): Promise<Librarian[]>;
}
