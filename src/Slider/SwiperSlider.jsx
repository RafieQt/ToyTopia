import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/pagination';
import 'swiper/css';
import { Link } from 'react-router';


const SwiperSlider = ({ toys }) => {
  console.log(toys);
  return (
    <Swiper
      className='my-10 mySwiper'
      rewind={true}
      slidesPerView={3}
      centeredSlides={true}   
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, Pagination]}
    >

      {toys.slice(0, 7).map(toy => (
        
          <SwiperSlide className='' key={toy.toyId}>
            <Link to={`ToyDetails/${toy.toyId}`}>
        <img className='relative h-130 w-full ' src={toy.pictureURL} alt="" />
            </Link>
        <div className="absolute bottom-0 left-0 w-full h-25 bg-linear-to-t from-black to-transparent"></div>
        <p className='absolute bottom-3 left-2 text-white text-lg font-semibold'>
          <Link to={`ToyDetails/${toy.toyId}`}>
          
          {toy.toyName}
          </Link>
          </p></SwiperSlide>
        ))
      }


    </Swiper>
  );
};

export default SwiperSlider;