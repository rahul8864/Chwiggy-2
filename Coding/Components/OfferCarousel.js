import React, { useState } from 'react';
import './ImageCarousel.css'; // Make sure to create this CSS file for styling

const OfferCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const imageWidth = 400;
  const images = [
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/8e3c441579fe371299ea23001551643f',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/9044664374615504057d1c954b9ce4a0',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/d2501e003d602868d6da148c6f816643',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/c39a19c09a7368d82587386bb00d65fe',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/dd9eafcdd80c0c5f9aecd1969deec8fa',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/2e54588fcfbfae32c57d1d4d3515f6e5'
];

  const scrollLeft = () => {
    const newPosition = scrollPosition - imageWidth;
    setScrollPosition(Math.max(newPosition, -imageWidth * (images.length - 1)));
  };

  const scrollRight = () => {
    const newPosition = scrollPosition + imageWidth;
    setScrollPosition(Math.min(newPosition, 0));
  };
  return (
    <div className='container'>
        <div className='title_slider'>
        <h2 className='text'>Best offers for you</h2>
        <div className='arrow_buttons'>
        <button className='offer_slider' onClick={scrollRight} disabled={scrollPosition >= 0}>&larr;</button>
        <button className='offer_slider' onClick={scrollLeft} >&rarr;</button>
            </div>
            </div>
    <div className="scrollable-image-carousel">
      
      <div
        className="carousel-container"
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
      
    </div>
    </div>
  );
};

export default OfferCarousel;
