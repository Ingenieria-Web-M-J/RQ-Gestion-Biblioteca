import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneLibrarianArgs } from "./args/UpdateOneLibrarianArgs";
import { Librarian } from "../../../models/Librarian";
export declare class UpdateOneLibrarianResolver {
    updateOneLibrarian(ctx: any, info: GraphQLResolveInfo, args: UpdateOneLibrarianArgs): Promise<Librarian | null>;
}
