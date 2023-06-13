import React, { useEffect }  from "react";
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
import { v4 as uuidv4 } from 'uuid';
import { useMutation } from '@apollo/client';
import { Mutation_creaTask } from '../../graphql/mutations/createTask'


export const ModalTask: React.FC = () => {

  const currentUser = useGlobalContext();

  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = React.useState<any>(
    new Set(["Asignar Tarea"])
  );
  const [valid, setValid]=React.useState(false);
  const [task, setTask] = React.useState<{[key: string]: string}>({});
  const {user, isAuthenticated} = useAuth0();

  const [taskCreate, {data:taskCreateData}] = useMutation(Mutation_creaTask)


  //verifica el estado del graphql
  useEffect(() => {
    if(taskCreateData){
      if(taskCreateData.taskCreate?.assigned===user?.nickname){
        currentUser?.createTask(taskCreateData?.taskCreate);
      }
    
    }

  },[taskCreateData])


  // cerrar el modal
  const handler = () => setVisible(true);
  let id_task = uuidv4();

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
    setSelected(new Set(["Asignar Tarea"]));
    setTask({});
    setValid(false);
  };

  //select valor del switch
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  //escuchar los cambios del input
  const changeInput = (e: any) => {
    const {name, value} = e.target;

    setTask((prev) => ({...prev, [name]: value}));
  };

  //enviar la informacion 
  const sendData = () => {

    if(task.title && task.content && selected ){
      const data = {
        id_task:id_task,
        title: task.title,
        content:task.content,
        assigned: selected.currentKey ? selected.currentKey : user?.nickname,
        status: "pending",
        user_created: user?.nickname,
        email: user?.email
      }
       taskCreate({
        variables: {
          data:data
        }

      });
      closeHandler()
    } else{
      setValid(!valid);
   console.log('no existe')
    }

    
  };

  const colorButton = () => {
    if (isAuthenticated) return "primary";
    return "warning";
  };

  return (
    <div>
      <Tooltip
        content={isAuthenticated ? "" : "Inicie Session o cree una Cuenta"}
        color={colorButton()}
      >
        <Button auto shadow onPress={handler} disabled={!isAuthenticated}>
          Crear Tarea
        </Button>
      </Tooltip>
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}

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
            label="Descripcion de la Tarea:"
            labelPlaceholder="Tarea a realizar"
            bordered
            color="primary"
            onChange={changeInput}
            fullWidth
          />
          {
            currentUser?.user_list && (
              <Dropdown>
              <Dropdown.Button flat>{selectedValue}</Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
              >
                {
  
                currentUser?.user_list && currentUser?.user_list?.map((item: any, index) => (
                    <Dropdown.Item
                    css={{
                      width:'100%'
                    }}
                     key={item.username}
                    >
                        {item.username}
                    </Dropdown.Item>
                  ))
                  
  
                }
              </Dropdown.Menu>
            </Dropdown>
            )
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
          <Button auto flat color="error" onPress={closeHandler}>
            Salir
          </Button>

          <Button auto onPress={sendData}>
            Guardar
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
};
