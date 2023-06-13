

import {ASSIGN_TAREA,CREATE_TAREA,DELETE_TAREA,UPDATE_TAREA, ADD_USERS_LIST,ADD_TASKS_INIT, UPDATE_USERS_LIST} from '../utils/types';
// import {dataTask, DeleteTask, UserListItems, AssignTask } from '../types/types';



export function useReducerGlobal (state: any, action: { type: string, payload: any }) {

    switch(action.type){

        case ADD_TASKS_INIT:
          return {
            ...state,
            task: action.payload
          }

        case CREATE_TAREA: 
        return  {
          ...state,
          task: [...state.task, {...action.payload}]
        }
        
        case UPDATE_TAREA:
        return {
          ...state,
          task: state.task.map(( item: any) => {
            
            if(item.id === action.payload.id){
                item = {item, ...action.payload}
            }
            return item;
          })
        }
        case DELETE_TAREA: 
        return {
          ...state,
          task: state.task.filter( (item: any) => item.id !== action.payload)
        }

        case ASSIGN_TAREA:
          return{
            ...state,
            task: state.task.map( (item:any) => {
              if(item.id === action.payload.id){
               item = {...item, status:action.payload.status}
              }
              return item;
            })
          }
  
        case ADD_USERS_LIST:
          return {
            ...state,
            user_list: action.payload
          }
        
        case UPDATE_USERS_LIST:
          return {
            ...state,
            user_list: [...state.user_list, action.payload]
          }
        default:
        return state
    }
}

