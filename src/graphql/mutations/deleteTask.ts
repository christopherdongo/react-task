
import { gql } from '@apollo/client';

export const Mutation_deleteTask = gql`
  mutation name( $data: TaskDeleteInput!) {
        taskDelete(data: $data){
       success
    }
  }
   `
