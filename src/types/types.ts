
export interface dataTask {
    id?: string;
    title?: string | undefined;
    content?: string | undefined;
    status?: string | undefined;
    user_created?: string | undefined | any;
    assigned?: string |undefined;
}

export interface updateTask {
    id?: string | undefined;
    title?: string | undefined;
    content?: string | undefined;
    status?: string | undefined;
    user_created?: string | undefined | any;
    assigned?: string |undefined;
}

export interface AssignTask {
    id?: string;
    status?: string;
}

type deleteTask = {
    id?: string | undefined
}

type assignTask = {
  id?: string
  status?: string
}

export interface DeleteTask  {
    id: string
}

export interface GlobalProviderProps {
    children: JSX.Element | JSX.Element[]
  }

export type contextType = {
    user: object;
    task: Array<dataTask>;
    loading:boolean;
    user_list:Array<object>;
    task_list:Array<object>;
    createTask: (arg:dataTask) => void;
    updateTask: (arg:dataTask) => void;
    deleteTask: (arg:deleteTask) => void;
    assignTask: (arg:assignTask) => void;

}


export interface IActions {
CREATE_TAREA: string;
DELETE_TAREA: string; 
UPDATE_TAREA: string; 
ASSIGN_TAREA: string; 
}