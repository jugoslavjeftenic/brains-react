import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowAuthors = () => {
    const authors = useLoaderData();

    return (
        <div>
            <h1>ShowAuthors</h1>
            <div>
                <ol>
                    {authors.map((a) => {
                        return <li key={a.id}>
                            {a.name}
                        </li>;
                    })}
                </ol>
            </div>
        </div>
    );
};

export default ShowAuthors;