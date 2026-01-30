import React from 'react';
import SwiperSlider from '../Slider/SwiperSlider';
import { useLoaderData } from 'react-router';
import PopularToys from '../Components/PopularToys';



const Home = () => {
    const toys = useLoaderData();
    return (
        <div>
            <h2 className='text-blue-600 font-semibold text-center text-5xl pt-5'>Trending Toys!</h2>
            <SwiperSlider toys={toys}></SwiperSlider>
            <PopularToys toys={toys}></PopularToys>
        </div>
    );
};

export default Home;