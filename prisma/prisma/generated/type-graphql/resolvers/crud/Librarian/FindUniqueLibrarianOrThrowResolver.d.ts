import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLibrarianOrThrowArgs } from "./args/FindUniqueLibrarianOrThrowArgs";
import { Librarian } from "../../../models/Librarian";
export declare class FindUniqueLibrarianOrThrowResolver {
    getLibrarian(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLibrarianOrThrowArgs): Promise<Librarian | null>;
}
