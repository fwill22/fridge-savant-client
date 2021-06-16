import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import img1 from './images/carousel1.jpeg'
import img2 from './images/carousel2.jpeg'
import img3 from './images/carousel3.jpeg'
import img4 from './images/carousel4.jpeg'

const colors = [
  img1,
  img2,
  img3,
  img4
  ];
const delay = 4000;

const Slider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className='slideshow'>
      <div
        className='slideshowSlider' data-testid = 'slideShowSlider'
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((url, index) => (
          <div className='slideContainer'>
            <img className='slide' key={index} src={url} />
          </div>
        ))}
      </div>

      <div className='slideshowDots' data-testid = 'slideShowDots'>
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
