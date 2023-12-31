import React, {useState, useEffect} from 'react';

import './carrousel.scss';

const images = [
    { url: '/img/imagen1.jpg', description: 'Imagen boceto 1'},
    { url: '/img/imagen2.jpg', description: 'Imagen boceto 2'},
    { url: '/img/imagen3.jpg', description: 'Imagen boceto 3'},
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

const currentImage = images[currentSlide];


return(
    <div className="carousel" style={{ backgroundImage: `url(${currentImage.url})` }}>
    <div className="carousel-overlay"></div>
    </div>
)}
export default Carousel
