import React from 'react';
import { Card, Text, Button, Row, Col} from "@nextui-org/react";
import { updateTask } from '../../types/types';
import {ModalUpdate} from '../Modal/ModalUpdate';
import {useGlobalContext} from '../../context/global';


export type ArgunmentFunction = (id: string | undefined) => void;
export type ArgunmentFuntcionAssign = (id: string | undefined , status: string | undefined) => void

export const Task: React.FC<updateTask> =({id,content,assigned,title,status,user_created })=>{

  const userContext = useGlobalContext();


    const deleteTask: ArgunmentFunction =(id)=>{
      userContext?.deleteTask({id})
    }

    const updateStatus: ArgunmentFuntcionAssign=(id, status)=>{
           if(status === 'pending'){
            const newStatus = "finished"
            userContext?.assignTask({id,status:newStatus})
           }else{
            const newStatus = "pending"
            userContext?.assignTask({id,status:newStatus})
           }

    }

    return (
          <Card css={{ width:'100%', cursor:'pointer' }} isHoverable variant="bordered" >
            <Card.Header
            css={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              width:'100%',
              flexDirection:'row',
            }}
            >
              <Text  css={{
                display:'inline-flex',
                justifyContent:'center',
                alignItems:'center'
              }}  h2 size={22}>Titulo:<Text span  size={22} css={{paddingLeft:'10px', lineHeight:'25px' }} color='#697177
              '>{title}</Text></Text>
              
            </Card.Header>
            <Card.Divider />
            <Card.Body>
            <Col
            css={{height:'100px'}}
            >
            <Text>
                {content}
              </Text>
            </Col>
            <Card.Divider />
              <Col>
                <Text h5 
                        css={{
                          textGradient: "45deg, $blue600 -20%, $pink600 50%",
                          marginBottom:'0px'
                        }}
                >Creado por: <Text span  weight="bold" size={20} css={{paddingLeft:'1px'}} color='#697177'>{user_created}</Text></Text>
              </Col>
              <Col>
              <Text h5 
                        css={{
                          textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        }}
                >Asignado a:<Text span  weight="bold" size={20} css={{paddingLeft:'1px'}} color='#697177'>{assigned}</Text></Text>
              </Col>
              <Col>
             {status === 'pending' ? ( <Button color="error" size="xs"  onPress={() => updateStatus(id, status)}>
                Estado: Pendiente
              </Button>) : ( <Button color="error" size="xs"  onPress={() => updateStatus(id, status)}>
                  Estado: Terminado
              </Button>)}
        
              </Col>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="center" 
              css={{
                gap:'1rem',
     
                '@xsMax':{
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems: 'center',
                    gap:'1rem'

                }
              }}
              >
                <Button size="sm" color="error"
                onClick={() => deleteTask(id)}
                >
                  Eliminar
                </Button>
                <ModalUpdate id={id} content={content} assigned={assigned} title={title} status={status} user_created={user_created} />
              </Row>
            </Card.Footer>
          </Card>
    )
}