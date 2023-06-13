export interface dataTask {
    id?: string;
    id_task?: string;
    title?: string | undefined;
    content?: string | undefined;
    status?: string;
    user_created?: string | undefined | any;
    assigned?: string |undefined;
    email?: string;
}

export interface updateTask {
    id_task?: string | undefined;
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

type deletetaskArgs = string | undefined;


type assignTask = {
  id?: string;
  status?: string;
};

type userList = {
    id: string;
    email: string;
    username: string;
    __typename: string;
}

 export interface UserList {
    id?: string | undefined;
    email?: string;
    username?: string;
    __typename?: string;
}

export interface UserListItems extends Array<userList>{}

export interface DeleteTask  {
    id: string;
}


export interface TaskInit {
    id?: string;
    email?: string;
    username?: string;
    __typename?: string;
    id_task?: string;
    title?: string;
    content?: string;
    status?: string;
    user_created?: string;
    updatedAt?: string;
    assigned?: string;
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
    deleteTask: (arg: deletetaskArgs) => void;
    assignTask: (arg:assignTask) => void;
    addUserList: (arg:Array<object>) => void;
    addTaskListInit: (arg: Array<object>) => void;
    userUpdateList: (arg:userList ) => void;


}


export interface IActions {
CREATE_TAREA: string;
DELETE_TAREA: string; 
UPDATE_TAREA: string; 
ASSIGN_TAREA: string; 
}