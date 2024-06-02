import React from 'react'
import {Container,Row} from 'react-bootstrap'

const login = () => {
  return (
    
 
     
<div className='login-container'>

     <div className='login-form'>
     <h1>Login</h1>
        
        
            <form action="">
                <label>
                    Username:
                    <input 
                    type="text"
                    name='username'
                    placeholder='username'
                     />
                     <br />
                     <br />
                     <label>
                        Password: 
                        <input 
                        type="password"
                        name= 'password'
                        placeholder='password'
                         />
              
                     </label>
                </label>
              
                <div className="button-container">
                <button type='submit'>Login</button>
                </div>
            </form >
      </div>
        
 </div>
   
   
    

  )
}

export default login