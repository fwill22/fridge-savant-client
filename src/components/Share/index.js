import React from 'react';
import './index.css';
import {
  EmailShareButton,
  EmailIcon
} from "react-share";

const Share = ({title, recipeUrl}) => {
  return (
    <div>    
      <div className="Demo__some-network">
        <EmailShareButton
          subject={title}
          body={`Hey! I found this great recipe on my Fridgey Boi, come check it out! 

          ${title}
          
          ${recipeUrl}
          
To find other great recipes sign up to Fridge Savant here!
          
www.FridgeSavant.com`} 
          url={''}
          className="emailShareButton"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </div>
  )
}

export default Share