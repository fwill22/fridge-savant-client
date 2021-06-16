import React from 'react';
import './index.css';
import {
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

const WhatsappShare = ({recipeUrl}) => {
  return (
    <div>    
      <div className="whatsappShare">
        <WhatsappShareButton className="whatsappShareButton"
          url={recipeUrl}
          quote={`Hey! I found this great recipe on my Fridge Savant, come check it out!     
                  To find other great recipes sign up to Fridge Savant here:       
                  www.FridgeSavant.com`} >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </div>
  )
}

export default WhatsappShare