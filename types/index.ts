export type BookType = {
    id: number;    
    title: string;
    author: string;
    isbn: string;   
    available: Boolean; 
    borrowRecords: [Borrow];
    createdAt: string;
    updatedAt: string; 
  };