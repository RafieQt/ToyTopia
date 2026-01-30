import React from 'react';
import ToyCard from './ToyCard';

const PopularToys = ({ toys }) => {
    return (
        <div>
            <h2 className='text-center text-blue-600 text-5xl font-semibold pb-4'>Popular Toys!</h2>
            <div className='grid grid-cols-4 gap-3 mx-auto container pb-6 pt-3'>
                {
                    toys.map(toy => <ToyCard toy={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default PopularToys;