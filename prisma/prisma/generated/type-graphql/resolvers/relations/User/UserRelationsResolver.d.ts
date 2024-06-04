import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { Borrow } from "../../../models/Borrow";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserBooksArgs } from "./args/UserBooksArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
export declare class UserRelationsResolver {
    books(user: User, ctx: any, info: GraphQLResolveInfo, args: UserBooksArgs): Promise<Borrow[]>;
    accounts(user: User, ctx: any, info: GraphQLResolveInfo, args: UserAccountsArgs): Promise<Account[]>;
    sessions(user: User, ctx: any, info: GraphQLResolveInfo, args: UserSessionsArgs): Promise<Session[]>;
}
