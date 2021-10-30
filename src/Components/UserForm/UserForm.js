import React, { useState } from "react";
import {Button, Form, Offcanvas } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { addUser } from "../../Redux/action/actions";
const UserForm = ({ handleClose, show, ...rest }) => {
    const [formValue,setFormValues] = useState({
      participantName:"",location:"",date:"",units:"",type:"",points:0
    });
    const [error,setError] = useState()
    const handleFormValues = (e)=>{
        const {name,value} = e.target;
        setFormValues((prevValues)=>({
            ...prevValues,
            [name]:value
        }))
    }
    const {participantName,location,date,units,type,points} = formValue;
    const dispatch = useDispatch();
    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError("")
        if(!validate()) {return setError("All fields are required");}

        try {
          // console.log(formValue)
          dispatch(addUser(formValue));
        } catch (error) {
            
        }
    }
    const validate = ()=>{
        let check = true;
            for (const key in formValue) {
                
              check = Boolean(formValue[key]);
              if(!check) break;
            }
            return check;
    }
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} {...rest}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add User</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Participant name</Form.Label>
              <Form.Control type="text" placeholder="" name="participantName" value={participantName} onChange={handleFormValues}/>
           
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="" name="location" value={location} onChange={handleFormValues}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="" name="date" value={date} onChange={handleFormValues}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Units</Form.Label>
              <Form.Control type="text" placeholder="" name="units" value={units} onChange={handleFormValues}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" placeholder="" name="type" value={type} onChange={handleFormValues}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" placeholder="" name="points" value={points} onChange={handleFormValues}/>
            </Form.Group>
            <Form.Label className="text-danger">{error}</Form.Label> <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default UserForm;
