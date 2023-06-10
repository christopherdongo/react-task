import { createContext, useReducer, useContext } from "react";
import {useReducerGlobal} from './globalReducer';
import {contextType, GlobalProviderProps, dataTask, IActions,AssignTask} from '../types/types';
import {ASSIGN_TAREA,CREATE_TAREA,DELETE_TAREA,UPDATE_TAREA} from '../utils/types';
import {useAuth0} from '@auth0/auth0-react';


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
         dispatch({ 
            type: UPDATE_TAREA,
            payload:task,
            
         })
         console.log('tarea actualizada');
    }

    const deleteTask = (id:string) => {
        console.log(id)
         dispatch({ 
            type: DELETE_TAREA,
            payload:{id},
            
         }) 
         console.log('tarea actualizada');
    }

    const assignTask=(data:AssignTask)=>{
       
          dispatch({ 
            type: ASSIGN_TAREA,
            payload:data
            
         })
         console.log('tarea actualizada');
    }


    return (
        <GlobalContext.Provider
        value={{
            ...state,
            createTask,
            updateTask,
            deleteTask,
            assignTask
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