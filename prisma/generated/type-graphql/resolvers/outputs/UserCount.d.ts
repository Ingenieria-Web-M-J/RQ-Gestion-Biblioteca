import { UserCountAccountsArgs } from "./args/UserCountAccountsArgs";
import { UserCountBooksArgs } from "./args/UserCountBooksArgs";
import { UserCountSessionsArgs } from "./args/UserCountSessionsArgs";
export declare class UserCount {
    books: number;
    accounts: number;
    sessions: number;
    getBooks(root: UserCount, args: UserCountBooksArgs): number;
    getAccounts(root: UserCount, args: UserCountAccountsArgs): number;
    getSessions(root: UserCount, args: UserCountSessionsArgs): number;
}
