import React from 'react';
import {
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

const WhatsappShare = ({title, recipeUrl}) => {
  return (
    <div>    
      <div className="whatsappShare">
        <WhatsappShareButton className="whatsappShareButton"
          title={title}
          separator=" "
          url={recipeUrl}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </div>
  )
}

export default WhatsappShare