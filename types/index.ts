export type BookType = {
    id: number;    
    title: String;
    author: String;
    isbn: String;   
    available: Boolean; 
    borrowRecords: [Borrow];
    createdAt: String;
    updatedAt: String; 
  };