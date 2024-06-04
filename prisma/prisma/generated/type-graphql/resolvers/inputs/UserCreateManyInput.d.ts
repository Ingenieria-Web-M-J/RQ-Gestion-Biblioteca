export declare class UserCreateManyInput {
    id?: string | undefined;
    name?: string | undefined;
    email: string;
    password: string;
    role: "ADMIN" | "USER";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
}
