export declare class CreateManyUserAndReturnOutputType {
    id: string;
    name: string | null;
    email: string;
    password: string;
    role: "ADMIN" | "USER";
    createdAt: Date;
    updatedAt: Date;
    emailVerified: Date | null;
    image: string | null;
}
