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


const usuarios = [
  {
    id: 1,
    name: "jose",
  },
  {
    id: 2,
    name: "Pedro",
  },
  {
    id: 3,
    name: "Julian",
  },
];

interface tForm {
  title?: string,
  content?: string,

}

export const ModalUpdate: React.FC<updateTask> = ({id,content,assigned,title,status,user_created}) => {

  const currentUser = useGlobalContext();
  const {user, isAuthenticated} = useAuth0();

  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = React.useState<any>(
    new Set([`${assigned}`])
  );
  const [tkasId, setTaskId] = React.useState<string | undefined>("")
  const [valid, setValid]=React.useState(false);
  const [task, setTask] = React.useState<tForm | undefined>(undefined);

  const handler = () => setVisible(true);

  React.useEffect(() => {
     setTaskId(id)
     setTask({
      ...task,
      "title":title,
      "content":content
     })

  },[id,content,assigned,title,status,user_created])

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
    setValid(false);
  };

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const changeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setTask((prev) => ({...prev, [name]: value}));
  };

  const updateData = () => {

  console.log('holis')
    if(task?.title && task?.content && selected ){
      const data = {
        id:tkasId,
        title: task?.title,
        content:task?.content,
        assigned: selected.currentKey ? selected.currentKey : user?.nickname,
        status: status,
        user_created: user_created,
      }
      currentUser?.updateTask(data);
       closeHandler();
       console.log(data)
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
        <Button size="sm" shadow onPress={handler} disabled={!isAuthenticated}>
         Editar
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
          <Dropdown>
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
              {usuarios.map((item) => (
                <Dropdown.Item 
                css={{
                  width:'100%'
                }}
                key={item.name}>{item.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
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

          <Button auto onPress={updateData}>
            Guardar
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
};
