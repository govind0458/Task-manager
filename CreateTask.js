import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import Header from './Header'
import { StatusCodes } from 'http-status-codes'
import { saveTask } from '../services/Apiconnetion'
import Success from './Success'

export default function CreateTask() {

    const [Task, setTask] = useState({})
    const [savetask, setsavetask] = useState(false)
    const [Errortask, setErrortask] = useState(false);

    const handleChange = (e) => {
        setTask({ ...Task, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await saveTask(Task);
            if (res.status === StatusCodes.CREATED) {
                setTask({});
                setsavetask(true);
                setTimeout(() => {
                    setsavetask(false);
                }, 3000);
            } else {
                setErrortask(true);
                setTimeout(() => {
                    setErrortask(false);
                }, 4000)
            }

        } catch (error) {
            setErrortask(true);
            setTimeout(() => {
                setErrortask(false);
            }, 2000)
        }
    }
    return (
        <>
            {savetask ?
                <Container className='mt-5'>
                    <Success></Success>
                    <Header alertText='Task Save successfully '></Header> ;
                </Container>
                :
                <Container>
                    <Header alertText='Create  A New Task Here ' ></Header>

                    <Form>
                        <Row>
                            <Col lg='6'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label> Enter Task </Form.Label>
                                    <Form.Control type="text" name='name' placeholder="Task name " onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label> Discription </Form.Label>
                                    <Form.Control type="text" name='description' placeholder="write discription here  " onChange={handleChange} />
                                </Form.Group>
                            </Col>

                        </Row>

                        <Row>

                            <Col lg='6'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label> Deadline </Form.Label>
                                    <Form.Control type="date" name='deadline' onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className='text-center'>
                            <Button onClick={handleSubmit}> Add Task </Button>
                        </div>
                    </Form>
                </Container>
            }
            {Errortask ? <Container className='mt-5'>
                <Alert variant='danger' className='text-center'>Task not saved.....please try again</Alert>
            </Container> : null}
        </>
    )
}
