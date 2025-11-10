import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router'

export const Login = ({open, setIsopen}) => {
  const [loggedin, setLoggedin]=useState(true)
  const navigate =useNavigate()
  const handleLogin=()=>{
    setLoggedin(true)
  }
  const handleSigin=()=>{
    setLoggedin(false)
  }
  // const closeLogin=()=>{
  //   setIsopen(false)
  // }

  const handleSubmit=()=>{
    navigate('/admin-dashboard')
  }
  if(!open){
    return null
  }
  return (
    <div className="pop-up" >
        <div className="login" >
    {loggedin? <div className="user-login">
      <div className="form-title"><span>User</span> Login</div>
      <form action="" className='login-form' onSubmit={handleSubmit}>
        <div className="single-input-field">
          <label htmlFor="email">Email</label>
          <input type="email" required name='email' id='email' placeholder='Your email' />
        </div>
        <div className="single-input-field">
            <label htmlFor="password">Password</label>
            <input type="alphanumeric" placeholder='Type here' required name='password' id='password'/>
        </div>
        <div className="switch-link">
          <p>Create an account?<span onClick={handleSigin}>click here</span></p>
        </div>
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>:
    <div className="create-account">
      <div className="form-title"><span>User</span> Sign Up</div>
      <form action="" className='login-form' onSubmit={handleSubmit}>
        <div className="single-input-field">
          <label htmlFor="name">Name</label>
          <input type="text" required name='name' id='name' placeholder='Your name' />
        </div>
        <div className="single-input-field">
          <label htmlFor="email">Email</label>
          <input type="email" required name='email' id='email' placeholder='Your email' />
        </div>
        <div className="single-input-field">
            <label htmlFor="password">Password</label>
            <input type="alphanumeric" placeholder='Type here' required name='password' id='password'/>
        </div>
        <div className="user-type">
          <div className="user-type-field">
            <input type="radio" id='client' name='user-type' value={'Client'}/> 
            <label htmlFor="client">Client</label>
            
          </div>
          <div className="user-type-field">
            <input type="radio" id='owner' name='user-type' value={'Owner'}/> 
            <label htmlFor="owner">Admin</label>
            
          </div>
          

        </div>
        <div className="switch-link">
          <p>Already have an account?<span onClick={handleLogin}>click here</span></p>
        </div>
        <button>Login</button>
      </form>
    </div>}
   </div>
    </div>
   
  )
}
