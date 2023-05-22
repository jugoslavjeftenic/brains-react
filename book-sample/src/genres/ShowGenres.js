import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowGenres = () => {
    const genres = useLoaderData();

    return (
        <div>
            <h1>ShowGenres</h1>
            <div>
                <ol>
                    {genres.map((a) => {
                        return <li key={a.id}>
                            {a.name}
                        </li>;
                    })}
                </ol>
            </div>
        </div>
    );
};

export default ShowGenres;