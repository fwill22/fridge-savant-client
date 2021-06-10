import React, { useEffect, useState } from 'react';
import './index.css'; 

const FlashMessage = () => {
  let [visibility, setVisibility] = useState(false);
  let [message, setMessage] = useState('');
  let [type, setType] = useState('');

  return(
    visibility && <div className={`alert alert-${type}`}>
      
    </div>
  )
}

export default FlashMessage;
