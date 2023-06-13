import { createContext, useReducer, useContext } from "react";
import {useReducerGlobal} from './globalReducer';
import {contextType, GlobalProviderProps, dataTask,AssignTask, UserListItems,TaskInit, UserList, DeleteTask} from '../types/types';
import {ASSIGN_TAREA,CREATE_TAREA,DELETE_TAREA,UPDATE_TAREA,ADD_USERS_LIST, ADD_TASKS_INIT, UPDATE_USERS_LIST} from '../utils/types';



const INITIAL_STATE = {
    user:{},
    task:[],
    loading:false,
    user_list:[],
    task_list:[],
}


// create context
export const GlobalContext = createContext<contextType | null>(null);

export const GlobalProvider = ({children}: GlobalProviderProps) => {

    const [state, dispatch] = useReducer(useReducerGlobal, INITIAL_STATE)

    /*funciones*/

    const createTask=(task: dataTask)=>{

         dispatch({ 
           type: CREATE_TAREA,
           payload:task,
           
        })

        console.log('tarea agregada')
    }

    const updateTask=(task:dataTask)=>{
        console.log(task)
         dispatch({ 
            type: UPDATE_TAREA,
            payload:task,
            
         })
         console.log('tarea actualizada');
    }

    const deleteTask = (id: string) => {
         dispatch({ 
            type: DELETE_TAREA,
            payload:id,
            
         })
         console.log('tarea eliminada');
    }

    const assignTask=(data:AssignTask)=>{
          dispatch({ 
            type: ASSIGN_TAREA,
            payload:data
            
         })
         console.log('tarea asignada');
    }

    const addUserList=(data:UserListItems)=>{
          dispatch({ 
            type: ADD_USERS_LIST,
            payload:data
            
         })
         console.log('tarea actualizada');
    }

    const addTaskListInit=(data:TaskInit)=>{
        dispatch({ 
            type: ADD_TASKS_INIT,
            payload:data
            
         })
    }

    const userUpdateList=(data:UserList)=>{
    
        dispatch({ 
            type: UPDATE_USERS_LIST,
            payload:data
         })
         console.log('usuario agregado')
    }


    return (
        <GlobalContext.Provider
        value={{
            ...state,
            createTask,
            updateTask,
            deleteTask,
            assignTask,
            addUserList,
            addTaskListInit,
            userUpdateList
        }}
        >
          {children}
        </GlobalContext.Provider>
    )
}



// exportamos el usecontext asi ta no lo importanos en cada componente
export const useGlobalContext = () =>{

    return useContext(GlobalContext)

}