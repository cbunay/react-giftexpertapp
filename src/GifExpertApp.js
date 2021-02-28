import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    return (
        <>
            <h2>GifExpert</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(categorie =>
                        <GifGrid
                            key={categorie}
                            category={categorie}
                        />
                    )
                }
            </ol>
        </>
    )
}
