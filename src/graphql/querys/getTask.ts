import {gql} from "@apollo/client";

export const getTaskList = gql`
  query {
    tasksList {
      count
      items {
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
  }
`;
