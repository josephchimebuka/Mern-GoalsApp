import React from 'react'
import { FaUser } from 'react-icons/fa'
import { useState,useEffect } from 'react'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const{name,email, password, password2} = formData;
    const onChange =(e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:[e.target.value],
        }))
    }
    const onSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <>
       <section  className='heading'>
        <h1><FaUser/> Register</h1>
        <p>Please create an account</p>
    </section>
    <section className='form'>
    <form onSubmit={onSubmit}>
        <div className='form-group'>
        <input 
            type="text"
            value={name}
            placeholder='Enter your name'
            className='content'
            id='name' 
            name='name'
            onChange={onChange}
        />
        </div>
      
        <div className='form-group'>
        <input 
            type="email"
            placeholder='Enter your email'
            value={email}
            className='form-control'
            id='name' 
            name='email'
            onChange={onChange}
        />
        </div>
       
        <div className='form-group'>
        <input 
            type="password"
            placeholder='Enter your password'
            value={password}
            className='form-control'
            id='name' 
            name='password'
            onChange={onChange}
        />
        </div>
       
        <div className='form-group'>
        <input 
            type="text"
            placeholder='Confirm your password'
            value={password2}
            className='form-control'
            id='name' 
            name='password2'
            onChange={onChange}
        />
        </div>
        <div className='form-group'>
        <button type='submit' className='btn btn-block' >Submit</button>
    </div>
    </form>
 
    </section>
    </>
 
  )
}

export default Register