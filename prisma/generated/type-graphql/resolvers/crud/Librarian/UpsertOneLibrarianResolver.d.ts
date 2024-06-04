import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneLibrarianArgs } from "./args/UpsertOneLibrarianArgs";
import { Librarian } from "../../../models/Librarian";
export declare class UpsertOneLibrarianResolver {
    upsertOneLibrarian(ctx: any, info: GraphQLResolveInfo, args: UpsertOneLibrarianArgs): Promise<Librarian>;
}
