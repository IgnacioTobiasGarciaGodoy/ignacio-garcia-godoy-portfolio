import { useState, useEffect } from "react";

function ProjectCarousel({ images, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <img
      src={images[currentIndex]}
      alt="Project"
      className="w-full h-full object-cover object-center transition-opacity duration-500"
    />
  );
}

export default ProjectCarousel