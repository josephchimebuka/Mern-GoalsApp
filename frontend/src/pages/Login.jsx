import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useState } from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const{email, password} = formData;
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
    
        <h1><FaSignInAlt/> Login</h1>
        <p>Please create an account</p>
    </section>
    <section className='form'>
    <form onSubmit={onSubmit}>
    
      
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
        <button type='submit' className='btn btn-block' >Login</button>
    </div>
    </form>
 
    </section>
    </>
 
  )
}

export default Login