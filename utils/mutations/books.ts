import { gql } from '@apollo/client';

export const UPSERT_BOOK = gql`
mutation UpsertOneBook($where: BookWhereUniqueInput!, $create: BookCreateInput!, $update: BookUpdateInput!) {
  upsertOneBook(where: $where, create: $create, update: $update) {
    id
    title
    author
    isbn
  }
}
`;
