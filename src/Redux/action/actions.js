import { ADD_USER, DELETE_USER, FETCH_USERS, UPDATE_USER } from "../constants/constants"

const url = "https://leaderboardbackend.herokuapp.com/api/user";
export const fetchUsers =  (page=1,limit=10) => async (dispatch) => {
    console.log(url)
    try {
        const query = await fetch(`${url}`,{
            headers:{
                "Content-type":"application/json"
            }
        });
        if(query.status !== 200)  throw "An error occured";
        const {data} = await query.json();
    

        dispatch({
            type:FETCH_USERS,
            payload:{
                data
            }
        })
    } catch (error) {
        console.log(error)
    }
}
export const addUser =  (userObj) => async (dispatch) => {
    try {
      var  uri = "https://leaderboardbackend.herokuapp.com/api/user";
        const query = await fetch(`${uri}`,{
            headers:{
                "Content-type":"application/json"
            },
            method:"POST",
            body: JSON.stringify(userObj)

        });

        if(query.status !== 200)  throw "An error occured";
        const data = await query.json();
        console.log("added user", data)
        dispatch({
            type:ADD_USER,
            payload:{
                data:data.data
            }
        })
    } catch (error) {
        console.log(error)
    }
}
export const updateUser =  (userObj) => async (dispatch) => {
   
    const uri =  `${url}/${userObj._id}`;
    const options =  {
        method:"put",
        headers:{
            "Content-type":"application/json",  
        },
        body:JSON.stringify(userObj)
    }
    try {
        const query = await fetch(uri,options);
        if(query.status !== 200)  throw "An error occured";
  
        dispatch({
            type:UPDATE_USER,
            payload:{
                data:userObj
            }
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteUser =  (userId) => async (dispatch) => {
    try {
        const query = await fetch(`${url}/${userId}`,{
            headers:{
                "Content-type":"application/json"
            }
            ,method:"delete"
        });
        if(query.status !== 200)  throw "An error occured";
     
        dispatch({
            type:DELETE_USER,
            payload:{
                userId:userId
            }
        })
    } catch (error) {
        console.log(error)
    }
}