import React, { useEffect } from 'react';

import { PageLayout } from "../components/page-layout";
import {NavbarTask} from '../components/NavbarTask';
import { useQuery, useMutation } from '@apollo/client';
import {  getUsersList } from '../graphql/querys/getUsers';
import { getTaskList } from '../graphql/querys/getTask';
import {useAuth0} from "@auth0/auth0-react";
import {useGlobalContext}  from '../context/global';
import {PageLoader} from '../components/page-loader'
import {Mutation_createUsers} from './../graphql/mutations/createUsers';


export const Home: React.FC = () => {
  const { user } = useAuth0();
  const {data } = useQuery(getUsersList);
  const {data:dataTask, loading } = useQuery(getTaskList);
  const [ task_userCreate , {data:dataUser, error:errorUser, loading:loadingUser }] = useMutation(Mutation_createUsers)

  const userTorrent = useGlobalContext();

  React.useEffect(() => {
      if(data && dataTask && user){
      userTorrent?.addUserList(data.task_usersList.items);
      userTorrent?.addTaskListInit(dataTask.tasksList.items.filter( (item: any) => item.assigned === user.nickname));

       if(data.task_usersList.items.filter((item:any) => item.email === user.email).length > 0){
          console.log('correo existe')
       /* */
       }else{
        task_userCreate({
          variables: {
            data:{
              "email":user?.email,
              "username":user?.nickname,
            }
          }
        })
       }
       }   
     

  },[user, data,dataTask]);


  useEffect(() => {
     if(dataUser){
       userTorrent?.userUpdateList(dataUser.task_userCreate)
     } 
  },[dataUser]);
 
  

  return (
    <>
        {
         loading===true? <PageLoader /> : ( <PageLayout>
          <NavbarTask /> 
       </PageLayout>) 
        }

</>
  );
}
