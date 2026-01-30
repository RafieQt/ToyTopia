import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import ReviewCard from './reviewCard';

const CustomerMarquee = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('/customer.json')
        .then(res=>res.json())
        .then(data=> setReviews(data));
    }, [])
    return (
        <div className='mb-10'>
            <h2 className='text-center text-blue-600 text-5xl font-semibold pb-4'>Customer Reviews</h2>
            <Marquee pauseOnHover={true} className='py-3'>
                {
                    reviews.map(review=><ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </Marquee>
        </div>
    );
};

export default CustomerMarquee;