import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query GetAccount {
  Account {

		
		password
    userName
	
  }
}
`;

export const ADD_PROFILE = gql`
mutation AccountMutation($object: Account_insert_input!) {
  insert_Account_one(object: $object) {
    uuid
    userName
  }
}
`;
