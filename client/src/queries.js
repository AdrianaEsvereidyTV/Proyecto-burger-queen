import { gql } from "apollo-boost";

// Mutation for user

export const SIGNIN_USER = gql `
   mutation($username: String!, $password: String!){
       signinUser(username: $username, password: $password){
           token
       }
   }
`;