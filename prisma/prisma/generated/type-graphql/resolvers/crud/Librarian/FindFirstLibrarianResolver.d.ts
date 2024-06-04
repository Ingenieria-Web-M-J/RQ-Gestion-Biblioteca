import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLibrarianArgs } from "./args/FindFirstLibrarianArgs";
import { Librarian } from "../../../models/Librarian";
export declare class FindFirstLibrarianResolver {
    findFirstLibrarian(ctx: any, info: GraphQLResolveInfo, args: FindFirstLibrarianArgs): Promise<Librarian | null>;
}
