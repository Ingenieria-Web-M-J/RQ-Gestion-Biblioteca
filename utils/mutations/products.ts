import { gql } from '@apollo/client';

export const UPSERT_PRODUCT = gql`
  mutation Mutation(
    $where: ProductWhereUniqueInput!
    $create: ProductCreateInput!
    $update: ProductUpdateInput!
  ) {
    upsertOneProduct(where: $where, create: $create, update: $update) {
      id
      title
      price
      image
    }
  }
`;
