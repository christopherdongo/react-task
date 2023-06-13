import React from "react";
import {
  Modal,
  Button,
  Text,
  Input,
  Textarea,
  Dropdown,
  Tooltip,
} from "@nextui-org/react";
import {useAuth0} from "@auth0/auth0-react";
import {useGlobalContext} from '../../context/global';
import {updateTask} from '../../types/types';
import { useMutation } from '@apollo/client';
import { Mutation_updateTask } from '../../graphql/mutations/updateTask'

interface tForm {
  title?: string,
  content?: string,

}

export const ModalUpdate: React.FC<updateTask> = ({id,id_task, content,assigned,title,status,user_created}) => {

  const currentUser = useGlobalContext();
  const {user, isAuthenticated} = useAuth0();

  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = React.useState<any>(
    new Set([`${assigned}`])
  );
  const [tkasId, setTaskId] = React.useState<string | undefined>("")
  const [valid, setValid]=React.useState(false);
  const [task, setTask] = React.useState<tForm | undefined>(undefined);

  const [taskUpdate, {data:taskUpdateData}] = useMutation(Mutation_updateTask)

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
    setValid(false);
    setTask({
      ...task,
      "title":title,
      "content":content
     })
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setTask((prev) => ({...prev, [name]: value}));
  };

  const updateData = () => {

    if(task?.title && task?.content && selected ){
      const data = {
        id:id,
        id_task:tkasId,
        title: task?.title,
        content:task?.content,
        assigned: selected.has(assigned)? assigned : selected.currentKey,
        status: status,
        user_created: user_created,
        email:user?.email,
      }
       
      taskUpdate({
        variables: {
          data:data
        }
      })
      closeHandler();
    } else{
      setValid(!valid);
   console.log('no existe')
    }
  };

  const closedHandler2=()=>{
    setVisible(false);
    console.log("closed");
    setValid(false);
    setSelected(new Set([`${assigned}`]))
    setTask({
      ...task,
      "title":title,
      "content":content
     })
  }

  const colorButton = () => {
    if (isAuthenticated) return "primary";
    return "warning";
  };


  React.useEffect(() => {
       if(id){
        setTaskId(id_task);
        setSelected(new Set([`${assigned}`]));
        setTask({
         ...task,
         "title":title,
         "content":content
        })
        
       }
 // eslint-disable-next-line 
  },[id, assigned])


React.useEffect(() => {
     if(taskUpdateData){
      currentUser?.updateTask(taskUpdateData.taskUpdate);
      setSelected(new Set([`${taskUpdateData.taskUpdate.assigned}`]))
     }
},[taskUpdateData])


const selectedValue = React.useMemo(
  () => Array.from(selected).join(", ").replaceAll("_", " "),
  [selected]
);

  return (
    <div>
      <Tooltip
        content={isAuthenticated ? "" : "Inicie Session o cree una Cuenta"}
        color={colorButton()}
      >
        <Button size="sm" shadow onPress={handler} disabled={status==="finished" ? true : false}>
         Editar
        </Button>
      </Tooltip>
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closedHandler2}

        css={{
          '@xsMax':{
            width:'100',
            margin: '10px'
          }
        }}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            TO-DO
            <Text b size={18} css={{
              paddingLeft:'5px'
            }} >
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body
          css={{
            paddingTop: 30,
          }}
        >
          <Input
            name="title"
            initialValue={task?.title}
            clearable
            bordered
            fullWidth
            color="primary"
            onChange={changeInput}
            size="lg"
            labelPlaceholder="Titulo de la Tarea"
          />
          <Textarea
            css={{
              marginTop: 30,
            }}
            name="content"
            initialValue={task?.content}
            label="Descripcion de la Tarea:"
            labelPlaceholder="Tarea a realizar"
            bordered
            color="primary"
            onChange={changeInput}
            fullWidth
          />
            {
              currentUser?.user_list && <Dropdown>
              <Dropdown.Button flat>{selectedValue}</Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
                defaultValue={assigned}
                defaultChecked={true}
              >
                {currentUser?.user_list.map((item: any) => (
                  <Dropdown.Item 
                  css={{
                    width:'100%'
                  }}
                  key={item.username}>{item.username}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            }
          {
          valid && (
            <Text
            color="#ECEDEE"
            
            css={{
              background: 'red',
            }}
            >
              Llene todos los campos
            </Text>
          )
        }
        </Modal.Body>

        <Modal.Footer>
          <Button auto flat color="error" onPress={closedHandler2}>
            Salir
          </Button>

          <Button auto onPress={updateData}>
            Guardar
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
};
