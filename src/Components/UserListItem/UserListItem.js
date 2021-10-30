import React from 'react'
import {Button} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../Redux/action/actions'
import Quantity from '../Quanitity/Quantity'
const UserListItem = (props) => {
  const  dispatch = useDispatch()
  const handleDelete = async ()=>{
    dispatch(deleteUser(props.user._id))
  }
    return (
        <tr>
       
        <td>{props.user._id}</td>
        <td>{props.user.participantName}</td>
        <td>{props.user.location}</td>
        <td>{(new Date(props.user.date)).getDate()}/{(new Date(props.user.date)).getMonth()}/{(new Date(props.user.date)).getFullYear()}</td>
        <td>{props.user.units}</td>
        <td>{props.user.type}</td>
        <td>
          <Quantity user={props.user} value={props.user.points}/>
        </td>
        <td>
        <Button variant="danger" onClick={handleDelete}>
            <i class="fas fa-trash"></i>
            </Button>
        </td>

      </tr>
    )
}



export default UserListItem
