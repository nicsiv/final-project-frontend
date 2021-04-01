import React from 'react';
import './App.css';
import Header from './Header';
import FurnitureForm from './FurnitureForm';
import FurnitureContainer from './FurnitureContainer';
import Search from "./Search";
import 'semantic-ui-css/semantic.min.css';






class Home extends React.Component{
  
  
  constructor(){
    super()
    this.state = {
      furnitures: [],
      display: false,
      searchBar: ''
    }
  }
  
  createFurniture = (newFurniture) => {
    this.setState({
      furnitures:[...this.state.furnitures, newFurniture]
    })
    console.log('create Furniture', newFurniture)
  
  }



 

  // createFurniture = (newFurniture) => {
    
  //   const reqObj = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newFurniture)
  //   }
  
  //   fetch('http://localhost:3001/furnitures', reqObj)
  //   .then(resp => resp.json())
  //   .then(furnitureObj=> this.setState({furnitures: [...this.state.furnitures, furnitureObj]}))
  // }
   

  componentDidMount(){
    fetch('http://localhost:3001/furnitures')
    .then(resp => resp.json())
    .then(furnituresArry => {
      this.setState({
        furnitures: furnituresArry
      })
    })
  
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  deleteFurniture = (id) => {
    const updatedFurnitures = this.state.furnitures.filter( furniture => furniture.id !== id )

     this.setState({
       furnitures: updatedFurnitures
     })
  }

  filtered = (e) => {
    this.setState({
      searchBar: e.target.value,
    });
  };

  filtering = () => {

    return this.state.furnitures.filter((furnitures) => {
      if (this.state.searchBar === '') {
          return furnitures
      } else {
        console.log(this.state.searchBar)
        return furnitures.room.toLowerCase().includes(this.state.searchBar.toLowerCase())
      }
    })
  }
  
 
  


    render(){
      return (
        <div className="wrapper">
        <>
          <Header/>
          { this.state.display
              ?
            <FurnitureForm createFurniture={this.createFurniture} />
              :
            null
          }
          <Search filtered={this.filtered} theSearchBar={this.state.searchBar}/>
          <div className="buttonContainer">
            <button onClick={this.handleClick}> Add a Piece of Furniture </button>
          </div>
          <FurnitureContainer furnitures={this.filtering()} deleteFurniture={this.deleteFurniture}/>
        </>
        </div>
     
      );
    }

  
  }
  
  export default Home;
