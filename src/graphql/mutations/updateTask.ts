
import { gql } from '@apollo/client';

export const Mutation_updateTask = gql`
  mutation name($data: TaskUpdateInput!) {
  taskUpdate(data: $data){
     id
     user_created
      email
      content
      title
      status
      assigned
      id_task
      status
      updatedAt
      createdAt
  }
    
  }
   `
