import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import "./App.css"

export default function UserDetails(){
  const[users,setUsers]=useState(null);
  const{id}=useParams();
  const nav=useNavigate();

  useEffect(()=>{
    fetch(`https://dummyjson.com/users/${id}`)
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[id])

  if(!users) return <h3>Loading...</h3>

  return(
    <div>
      <h1>User Details</h1>
      <div className="card">
        <img src={users.image} alt="" />
        <h3> {users.firstName} {users.lastName} </h3>
        <p> {users.email} </p>
        <p>  {users.phone} </p>
        <p> {users.address.address} </p>
      </div>
      <div className="buttons">
        <button onClick={()=>nav("/")}>Back</button>
      </div>
    </div>
  )
}