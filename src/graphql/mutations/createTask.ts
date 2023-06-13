
import { gql } from '@apollo/client';


export const Mutation_creaTask = gql`
   mutation name($data: TaskCreateInput!){
    taskCreate(data: $data){
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









/*
export const Mutation_creaTask = gql`
mutation Mutation_creaTask( $id_task: String!,
    $email: String!,
    $title: String!,
    $content: String!,
    $status: String!,
    $user_created: String!,
    $assigned: String! ){
        taskCreate(data:{id_task: $id_task,
  email: $email,
  title: $title,
  content: $content,
  status: $status,
  user_created: $user_created,
  assigned: $assigned})
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



` */