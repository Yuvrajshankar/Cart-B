import React from 'react';
import "./Slider.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../../images/electronics.jpg';
import img2 from '../../images/clothes.jpg';
import img3 from '../../images/books.jpg';
import img4 from '../../images/accessories.jpg';
import img5 from '../../images/beauty.png';
import img6 from '../../images/ferniture.jpg';
import img7 from '../../images/Sports.jpg';

function Slider() {
  return (
    <div className='slider'>
      <AliceCarousel
        autoPlay
        autoPlayInterval={3000}
        buttonsDisabled={true}
        dotsDisabled={false}
        infinite
      >
        <img src={img1} className='sliderimg img1' alt='' />
        <img src={img2} className='sliderimg img2' alt='' />
        <img src={img3} className='sliderimg img3' alt='' />
        <img src={img4} className='sliderimg img4' alt='' />
        <img src={img5} className='sliderimg img5' alt='' />
        <img src={img6} className='sliderimg img6' alt='' />
        <img src={img7} className='sliderimg img7' alt='' />
      </AliceCarousel>
    </div>
  )
}

export default Slider;