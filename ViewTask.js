import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, Col, Container, Row } from 'react-bootstrap'
import Header from './Header'
import { DeleteTask, GetTask,MarkAscompleated } from '../services/Apiconnetion'

export default function ViewTask() {
    const [tasks, setTasks] = useState([])


    const fetchtask = async () => {
        const res = await GetTask();
        setTasks(res.data)
    }
    useEffect(() => {
        fetchtask();
    }, [])

    const deleteTask = async (y) => {
        await DeleteTask(y);
        fetchtask();
    }

    const markAsCompleated = async (id) => {
        console.log(id);
        await MarkAscompleated(id);
        fetchtask();
    }
    return (
        <div>
            <Container>
                <Header alertText="Your task is here"></Header>
                <Row>
                    {tasks.map((e) => {
                        return (
                            <Col lg={4} className='my-2'>
                                <Card>
                                    <Card.Body>
                                        {e.IsCompleted ?
                                            <Alert variant="success" className="text-center"> <b>Compleated</b> </Alert> :
                                            <Alert variant="warning" className="text-center"> <b>Pending</b> </Alert>}

                                        <Card.Title>{e.name} </Card.Title>
                                        <Card.Text>
                                            {e.description}
                                            {e.CreatedOn}
                                        </Card.Text>
                                        <Button variant="danger" className='btn-sm' onClick={()=>{
                                            deleteTask(e._id)
                                        }}>delete Task</Button>
                                        {!e.IsCompleted?<Button className='btn-sm mx-4' onClick={()=>{
                                            markAsCompleated(e._id);
                                        }}>Mark As compleated</Button>:null}
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </div>
    )
}
