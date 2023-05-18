import React, { useEffect, useState } from 'react';

export const T7fetch1 = () => {
    const [todos, setTodos] = useState([]);
    const [searchId, setSearchId] = useState([]);
    const [searchUserId, setSearchUserId] = useState([]);
    const [searchTitle, setSearchTitle] = useState([]);
    const [searchCompleted, setSearchCompleted] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        let cancel = false;

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(`Fetch nije uspeo sa kodom ${response.status}`);
            })
            .then((data) => {
                if (!cancel) {
                    setTodos(data);
                    setSearchResult(data);
                }
            })
            .catch((err) => console.log(err));

        return () => { cancel = true; };
    }, []);

    useEffect(() => {
        setSearchResult(todos);
        setSearchResult(prevSearchResult => {
            return prevSearchResult.filter(todo => {
                if (searchId > 0) {
                    return todo.id === parseInt(searchId);
                }
                else if (searchUserId > 0) {
                    return todo.userId === parseInt(searchUserId);
                }
                else if (searchTitle !== "") {
                    return todo.title.toLowerCase().includes(searchTitle);
                }
                return todo;
            });
        });
    }, [searchId, searchUserId, searchTitle, todos]);

    return (
        <div>
            <div>Zdravo, ja sam komponenta koja povlaci podatke sa sajta "https://jsonplaceholder.typicode.com/todos" putem "fetch.then()" metode i prikazuje ih kao tabelu.</div>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td><label>Potrazi ID: </label></td>
                        <td><input onChange={e => setSearchId(e.target.value)} type='number' /></td>
                    </tr>
                    <tr>
                        <td><label>Potrazi ID korisnika: </label></td>
                        <td><input onChange={e => setSearchUserId(e.target.value)} type='number' /></td>
                    </tr>
                    <tr>
                        <td><label>Pretrazi naslov: </label></td>
                        <td><input onChange={e => setSearchTitle(e.target.value.toLowerCase())} type='search' /></td>
                    </tr>
                    <tr>
                        <td><label>Zavrseno: </label></td>
                        <td><input onChange={e => setSearchCompleted(e.target.value.toLowerCase())} type='text' /></td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID korisnika</th>
                        <th>Naslov</th>
                        <th>Zavrseno</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResult.map(todo => {
                        return <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.userId}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed.toString()}</td>
                        </tr>;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export const T7fetch2 = () => {
    return null;
};