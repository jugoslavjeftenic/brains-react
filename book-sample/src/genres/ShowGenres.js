import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowGenres = () => {
    const genres = useLoaderData();

    return (
        <div>
            <h1>ShowGenres</h1>
            <div>
                <ol>
                    {genres.map((g) => {
                        return <li key={g.id}>
                            {g.name}
                        </li>;
                    })}
                </ol>
            </div>
        </div>
    );
};

export default ShowGenres;