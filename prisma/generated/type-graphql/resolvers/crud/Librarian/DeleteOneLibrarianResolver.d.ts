import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneLibrarianArgs } from "./args/DeleteOneLibrarianArgs";
import { Librarian } from "../../../models/Librarian";
export declare class DeleteOneLibrarianResolver {
    deleteOneLibrarian(ctx: any, info: GraphQLResolveInfo, args: DeleteOneLibrarianArgs): Promise<Librarian | null>;
}
