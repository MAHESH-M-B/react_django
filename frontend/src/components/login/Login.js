import React from 'react'
import { useState } from 'react';
import axios from 'axios'

// const baseurl='http://127.0.0.1:8000/api/tasks/'


export default function Login() {
  const[signup,setsignup]=useState({
         'username':'' ,                      
         'password':''              
    }
  );
  const Handlechange=(e)=>{
        e.preventDefault()
        setsignup({
          ...signup,
          [e.target.name]:e.target.value
        });
        e.preventDefault()
  }
  console.log(signup);
  const submit=(e)=>{
    e.preventDefault()
    const signupData=new FormData();
    signupData.append('username',signup.username)
    signupData.append('password',signup.password)

    try{
      axios.post('http://127.0.0.1:8000/api/tasks/',signupData).then((response)=>{
        console.log(response.data);
       })
    }catch(error){
          console.log(error );
    }
   
  }

  return (
    <div>
        
        <form  >
          <label>Username</label>
          <input
            type="text"
            onChange={ Handlechange}
            name="username"
          />
          <br />
          <label>password</label>

          <input
            type="password"
            onChange={ Handlechange}
            name="password" 
          />
          <br />
          <br />
          <button   onClick={submit}>Signup</button>
        </form>
      
    </div>
  );
}