import { gql } from '@apollo/client';


export const Mutation_createUsers = gql`
  mutation name($data: Task_userCreateInput!){
     task_userCreate(data: $data){
     email
     id
     username 
    }
  }

`