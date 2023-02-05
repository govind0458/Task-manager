import React from 'react'
import { Alert, Container } from 'react-bootstrap'

export default function Header(props) {
    return (
        <div>

            <Container className='text-center mt-5'>
                <Alert ><b>{props.alertText}</b></Alert>
                <p> {props.disc}</p>
            </Container>
        </div>
    )
}
