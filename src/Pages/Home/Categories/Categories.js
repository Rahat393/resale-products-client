import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categories.map(category => <CategoryCard
                    key={category._id}
                    category={category}
                ></CategoryCard>)
            }
        </div>
    );
};

export default Categories;