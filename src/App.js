import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "react-bootstrap"
import UsersList from './Components/UsersList/UsersList';
import {Button} from "react-bootstrap"
import { useState } from 'react';
import UserForm from './Components/UserForm/UserForm';
function App() {
  
  const [show, setShow] = useState(false);
          
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
    <Row className="mt-5">
      <h1 className="text-center heading">
        Leaderboard
      </h1>
    </Row>
    <UsersList/>
    <Button variant="success" className="add-btn" onClick={handleShow}>
      ADD USER
    </Button>
    <UserForm handleClose={handleClose} show={show} placement="end" name="end"/>
    </Container>
  );
}

export default App;
