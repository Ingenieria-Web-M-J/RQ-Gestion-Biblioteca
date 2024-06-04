import { gql } from "apollo-server-micro";

const Book = gql`
type Book{
    id: String!      
    title: String
    author: String
    isbn: String   
    available: Boolean  
    borrowRecords: [Borrow]
    createdAt: DateTime 
    updatedAt: DateTime 
}


type Borrow{
  id: String!      
  user: User!     
  userId :String
  book: Book    
  bookId: String
  borrowedAt: DateTime
  returnedAt: DateTime
  createdAt: DateTime
  updatedAt: DateTime 
}

type User {
  id: String!
  name: String
  email: String   
  password: String
  role: Role
  books: [Borrow]
  createdAt: DateTime
  updatedAt: DateTime 
  emailVerified: DateTime
  image: String
  accounts: [Account]
  sessions: [Session]

}

type Account{

}

type Session{

}

`;

export { Book };