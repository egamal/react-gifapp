import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Black Clover']);

    /* const handleAdd = () => {
        // setCategories([...categories, 'Black Clover']);
        setCategories(cat => [...cat, 'Black Clover']);
    }; */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category} 
                    />
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;
