import { Account } from "../models/Account";
import { Borrow } from "../models/Borrow";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name?: string | null;
    email: string;
    password: string;
    role: "ADMIN" | "USER";
    books?: Borrow[];
    createdAt: Date;
    updatedAt: Date;
    emailVerified?: Date | null;
    image?: string | null;
    accounts?: Account[];
    sessions?: Session[];
    _count?: UserCount | null;
}
