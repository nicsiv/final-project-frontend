import React, { useState } from 'react'
import EmptyStar from './assets/empty-star.svg';
import FilledStar from './assets/filled-star.svg';



const RatingSystem = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

   
 
  
    return (
      <div>
        {[...Array(5)].map((star, i) =>{
            let ratingNum = i + 1
            // let newRatingValue = ratingNum <= (hover || rating) ? FilledStar : EmptyStar

            return (
                // <input type="radio" name="star-rating"/>
                <img className="star" 
                src={ratingNum <= (hover || rating) ? FilledStar : EmptyStar} 
                alt="empty star" 
                value={ratingNum}
                // onClick={handleClick}

                onClick={() => setRating(ratingNum)}
                onMouseEnter={() => setHover(ratingNum)}
                onMouseLeave={() => setHover(null)}

                /> 
            )        
          })}

      </div>
    );
  }

  export default RatingSystem