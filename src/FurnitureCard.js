import React, { Component } from 'react';
import RatingSystem from './RatingSystem';

class FurnitureCard extends Component {




  handleDelete = (id) => {
    fetch(`http://localhost:3001/furnitures/${id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    // .then(FurnitureObj => {
      this.props.deleteFurniture(id)
    
  }

  
  render() {

    const { id, name, room, store, photo } = this.props.furnitureInfo

    return (
      <div className="card">
        <img src={photo} alt={name} className="ui large image" />
        <h3>{name}</h3>
        <p>{room}</p>
        <p>{store}</p>
        <RatingSystem/>
        <button onClick= {() => this.handleDelete(id)} className="del-btn">Remove</button>
      </div>
    );
  }

}

export default FurnitureCard;