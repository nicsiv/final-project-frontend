import React from 'react';
import FurnitureCard from './FurnitureCard'

const FurnitureContainer = (props) => {
  return(
    <div id="furniture-collection">
      {props.furnitures.map(furniture => 
        <FurnitureCard key={furniture.id} furnitureInfo={furniture} deleteFurniture={props.deleteFurniture} />
      )}
    </div>
  );
}

export default FurnitureContainer;