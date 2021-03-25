import React /*, { useState, useEffect }*/ from 'react';
import { useFectchApp } from '../hooks/useFetchApp';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category]);

    const { data: images, loading } = useFectchApp(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && (
                <p className='animate__animated animate__flash'>Loading...</p>
            )}
            <div>
                <ol className='card-grid'>
                    {images.map((gif) => (
                        <GifGridItem key={gif.id} {...gif} />
                    ))}
                </ol>
            </div>
        </>
    );
};
