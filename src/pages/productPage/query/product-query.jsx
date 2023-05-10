import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query users {
    users(order_by: { timeStamp: asc }) {
      uuid
      avatar
      productName
      productCategory
      productFresh
      productPrice
      timeStamp
      
    }
  }
`;

export const GET_PRODUCT_BY_PK = gql`
  query users($uuid: uuid!) {
    users_by_pk(uuid: $uuid) {
      uuid
      avatar
      productName
      productCategory
      productFresh
      productPrice
    }
  }
`;
