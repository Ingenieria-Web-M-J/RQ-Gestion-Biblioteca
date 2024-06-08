import { gql } from '@apollo/client';

const GET_BOOKS = gql`
query Books($take: Int, $skip: Int, $orderBy: [BookOrderByWithRelationInput!]) {
  books(take: $take, skip: $skip, orderBy: $orderBy) {
    id
    title
    author
    isbn
    available
    createdAt
    updatedAt
    _count {
      borrowRecords
    }
   
  }
}
`;
export { GET_BOOKS };
