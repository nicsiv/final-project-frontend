import React, { Component } from 'react';
import { Button, Form, Popup } from 'semantic-ui-react'

class FurnitureForm extends Component {
  
  constructor(){
    super()
    this.state = {
      name: '',
      room: '',
      store: '',
      photo: '',
      image: '',
      user_id: 6
    }
  }

 
  handleChange = (event) => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    

    const newFurniture = {
      name: this.state.name,
      room: this.state.room,
      store: this.state.store,
      photo: this.state.photo,
      image: this.state.image,
      user_id: this.state.user_id
    
    }

    event.target.reset()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFurniture)
    }
    
    
     fetch('http://localhost:3001/furnitures', reqObj)
    .then(resp => resp.json())
    .then(furnitureObj => {
      this.props.createFurniture(newFurniture)
    // console.log(this.props)
    this.setState({name: '', room: '', store: '', photo: '', image: '', user_id: ''})
    })
    
  }


// handleSubmit = (event) => {
//     event.preventDefault();
  
//     this.props.createFurniture(this.state)
  
    
  
//   }


  render() {
    return (
    <div onSubmit={this.handleSubmit} className="add-furniture-form">
      <Form>
      <Form.Field>
      <h3>Create a New Piece of Furniture</h3>
        <label>Furniture Name</label>
        <input onChange={this.handleChange} type="text" name="name" placeholder="Enter the furniture name..." className="input-text" value={this.state.name}/>
      </Form.Field>
      <Form.Field>
        <label>Room Name</label>
        <input onChange={this.handleChange} type="text" name="room" placeholder="Enter the room..." className="input-text" value={this.state.room} />
      </Form.Field>
      <Form.Field>
        <label>Store Name</label>
        <input onChange={this.handleChange} type="text" name="store" placeholder="Enter the store..." className="input-text" value={this.state.store} />
      </Form.Field>
      <Form.Field>
        <label>Image</label>
        <input onChange={this.handleChange} type="text" name="photo" placeholder="Enter an image URL..." className="input-text" value={this.state.photo} />
      </Form.Field>
      <Button style={{backgroundColor: '#D9C5A6', color: 'black'}} className="del-btn" type='submit'>Submit</Button>
      <Popup
      className="pop-up"
      style={{color: 'black'}}
    trigger={<Button style={{backgroundColor: '#D9C5A6', color: 'black'}} icon='add' />}
    content="To find an image URL, right click on image and choose the *Copy Image Address* option. Then paste it into this form"
    basic
  />
    </Form>
    </div>
    );
  }
}


export default FurnitureForm;