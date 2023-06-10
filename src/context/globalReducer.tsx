

import {ASSIGN_TAREA,CREATE_TAREA,DELETE_TAREA,UPDATE_TAREA} from '../utils/types';
import {dataTask, DeleteTask, AssignTask,IActions} from '../types/types';



export function useReducerGlobal (state: any, action: { type: string, payload: dataTask | DeleteTask }) {

    switch(action.type){

        case CREATE_TAREA: 
        localStorage.setItem('task', JSON.stringify(state))
        return  {
          ...state,
          task: [...state.task, {...action.payload}]
        }
        
        case UPDATE_TAREA:
        return {
          ...state,
          task: state.task.map(( item: any, index: number ) => {
            const { id, ...data } = action.payload;
            if(item.id === id){
                item = {item, ...data}
            }
            return item;
          })
        }
        case DELETE_TAREA: 
        return {
          ...state,
          task: state.task.filter( (item: any) => item.id === action.payload.id)
        }

        case ASSIGN_TAREA:
          return{
            ...state,
            task: state.task.map( (item:any) => {

              if(item.id === action.payload.id){
               item = {...item, ...action.payload}
              }
              return item;
            })
          }
        default:
        return state
    }
}

