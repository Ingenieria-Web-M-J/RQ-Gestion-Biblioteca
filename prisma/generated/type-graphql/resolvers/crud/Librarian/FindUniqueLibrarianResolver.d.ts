import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLibrarianArgs } from "./args/FindUniqueLibrarianArgs";
import { Librarian } from "../../../models/Librarian";
export declare class FindUniqueLibrarianResolver {
    librarian(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLibrarianArgs): Promise<Librarian | null>;
}
