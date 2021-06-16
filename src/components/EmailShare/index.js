import React from 'react';
import './index.css';
import {
  EmailShareButton,
  EmailIcon
} from "react-share";

const EmailShare = ({title, recipeUrl}) => {
  return (
    <div>    
      <div className="emailShare">
        <EmailShareButton
          subject={`I'm making ${title}`}
          body={`Hey! I found this great recipe on my Fridge Savant, come check it out! 

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

export default EmailShare