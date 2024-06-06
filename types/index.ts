export type BookType = {
    id: string;
    title: string;
    author: string;
    isbn: string;
    available: boolean;
    borrowRecords: BorrowType[];
    createdAt: string;
    updatedAt: string;
}

export type BorrowType = {
    id: string;
    user: UserType;
    book: BookType;
    borrowedAt: string;
    returnedAt: string;
    createdAt: string;
    updatedAt: string;
}

export type UserType = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    books: BorrowType[];
    createdAt: string;
    updatedAt: string;
    emailVerified: string;
    image: string;
}