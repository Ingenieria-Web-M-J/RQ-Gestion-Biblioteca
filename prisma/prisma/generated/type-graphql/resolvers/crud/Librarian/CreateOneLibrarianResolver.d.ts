import type { GraphQLResolveInfo } from "graphql";
import { CreateOneLibrarianArgs } from "./args/CreateOneLibrarianArgs";
import { Librarian } from "../../../models/Librarian";
export declare class CreateOneLibrarianResolver {
    createOneLibrarian(ctx: any, info: GraphQLResolveInfo, args: CreateOneLibrarianArgs): Promise<Librarian>;
}
