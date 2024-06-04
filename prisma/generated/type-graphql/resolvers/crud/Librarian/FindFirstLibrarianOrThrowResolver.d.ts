import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLibrarianOrThrowArgs } from "./args/FindFirstLibrarianOrThrowArgs";
import { Librarian } from "../../../models/Librarian";
export declare class FindFirstLibrarianOrThrowResolver {
    findFirstLibrarianOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstLibrarianOrThrowArgs): Promise<Librarian | null>;
}
