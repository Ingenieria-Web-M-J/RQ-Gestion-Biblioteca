const Book = {
    Mutation: {},
    Query: {
        books: async (_parent: any, args: any) => {
            return 'books';
        },
        book: async (_parent: any, args: any) => {
            return 'book';
        },
    },
};

export { Book };