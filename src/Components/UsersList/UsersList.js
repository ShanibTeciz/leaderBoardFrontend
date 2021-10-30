import React, { useEffect } from 'react'
import { Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../Redux/action/actions'
import UserListItem from '../UserListItem/UserListItem'

const UsersList = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(()=>{
            dispatch(fetchUsers(1));
            console.log(users)

    },[])
    return (
        <div className="user-list">
         <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Participant name</th>
      <th>Location</th>
      <th>Date</th>
      <th>Units</th>
      <th>Type</th>
      <th>Points</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          users.entities.map((user)=>  <UserListItem key={user._id} user={user}/>)
      }
 

  </tbody>
</Table>   
        </div>
    )
}

export default UsersList
