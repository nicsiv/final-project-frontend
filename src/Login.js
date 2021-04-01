import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import { Button, Form, Segment } from 'semantic-ui-react'




async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }


  return(
    
      <div id="parent" className="Login" >
           
      <div className="form-parent">
    <div className="new-form">
    <h1 style={{ color: 'white' }}>LOG IN TO SEE YOUR HOME LIST</h1>
  

          <Segment inverted>
    <Form inverted onSubmit={handleSubmit}>
      <Form.Group width={3} widths='equal' >
        <Form.Input fluid label='Username' placeholder='Username' onChange={e => setUserName(e.target.value)}/>
        <Form.Input fluid label='Password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      <Button style={{backgroundColor: '#D9C5A6', color: 'black'}} type='submit'>Submit</Button>
    </Form>
  </Segment>
        </div>
        </div>
        </div>
       
    
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }