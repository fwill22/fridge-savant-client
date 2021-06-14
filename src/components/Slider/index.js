import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const colors = [
  'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg',
  'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
  'https://static01.nyt.com/images/2019/05/15/dining/14Iranian6-promo/merlin_154113903_5b2b32c0-3c7b-45bd-9465-e300b8ea687f-superJumbo.jpg',
  'https://media.healthyfood.com/wp-content/uploads/2019/08/Spice-rubbed-fish-with-quinoa-and-kumara-salad-1024x652.jpg',
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
