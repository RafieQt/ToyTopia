import React from 'react';
import SwiperSlider from '../Slider/SwiperSlider';
import { useLoaderData } from 'react-router';
import PopularToys from '../Components/PopularToys';
import CustomerMarquee from '../Components/CustomerMarquee';



const Home = () => {
    const toys = useLoaderData();
    return (
        <div className='bg-gray-50'>
            <h2 className='text-blue-600 font-semibold text-center text-5xl pt-5'>Trending Toys!</h2>
            <SwiperSlider toys={toys}></SwiperSlider>
            <PopularToys toys={toys}></PopularToys>
            <CustomerMarquee></CustomerMarquee>
        </div>
    );
};

export default Home;