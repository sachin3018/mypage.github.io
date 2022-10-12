import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Social = () => {
   
    const copyright = '😁 HAPPY CODING 😁'
    return(
        <>
             <Navbar bg="dark" variant="dark" fixed='top' className='common'>
                <Container className='bg-dark'>
                <Navbar.Brand href="#home"><h1 className='name'> Sachin Singh </h1></Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="#home" >Home</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#social">Social</Nav.Link>
                <Nav.Link href="#project">Project</Nav.Link>
                </Nav>
                
                </Container>
            </Navbar>
        </>
    )
}

export default Social;
