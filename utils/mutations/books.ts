import { gql } from '@apollo/client';

/**
 * Mutation for upserting a book.
 * If a book with the given `where` condition exists, it updates the book with the provided `update` data.
 * If no such book exists, it creates a new one with the provided `create` data.
 */
export const UPSERT_BOOK = gql`
  mutation UpsertOneBook(
    $where: BookWhereUniqueInput!,
    $create: BookCreateInput!,
    $update: BookUpdateInput!
  ) {
    upsertOneBook(where: $where, create: $create, update: $update) {
      id
      title
      author
      isbn
      available
    }
  }
`;
