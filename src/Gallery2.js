import React, { useState } from 'react';

const images = [
  { src: 'https://www.fullstackpython.com/img/logos/react.png', width: '50px', title: 'Image 1' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rlMI9mJOXPOZeIt3SKr5YopXEnwPY_55sg&s', title: 'Image 2' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbBKB9PQ37MtbmGDCA1YYWPz8X6zJkUcFkg&s', title: 'Image 3' },
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  return (
    <div class="p-3 mb-3 border rounded bg-light d-flex justify-content-center align-items-center flex-column">
        <h4>Gallery</h4>
        <img class
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            style={{ maxWidth: '200px', maxHeight: '200px', width: '100%', height: 'auto' }}
        />
        <button class="btn btn-success mt-3" onClick={handleNext}>Próximo</button>
    </div>
  );
}

export default Gallery;