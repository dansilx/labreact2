import React, { useState } from 'react';

const images = [
  { src: 'https://www.fullstackpython.com/img/logos/react.png', title: 'Image 1' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rlMI9mJOXPOZeIt3SKr5YopXEnwPY_55sg&s', title: 'Image 2' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbBKB9PQ37MtbmGDCA1YYWPz8X6zJkUcFkg&s', title: 'Image 3' },
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  return (
    <div className="p-4 mb-6 border rounded bg-gray-50 shadow-md flex flex-col items-center">
      <h4 className="text-xl font-semibold mb-3">Gallery</h4>
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].title}
        className="w-60 h-40 object-cover mb-3 rounded-lg"
      />
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={handleNext}
      >
        Próximo
      </button>
    </div>
  );
}

export default Gallery;
