import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon
} from "react-share";

const FacebookShare = ({recipeUrl}) => {
  return (
    <div>    
      <div className="facebookShare">
        <FacebookShareButton className="facebookShareButton"
          url={recipeUrl}
          quote={`Hey! I found this great recipe on my Fridge Savant, come check it out!     
                  To find other great recipes sign up to Fridge Savant here:       
                  www.FridgeSavant.com`} 
          hashtag="#fridgeboi">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
    </div>
  )
}

export default FacebookShare