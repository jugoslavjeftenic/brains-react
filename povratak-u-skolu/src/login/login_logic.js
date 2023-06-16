import { useState } from 'react';

export const useLogin = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    return [
        user,
        (userData) => {
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
        },
        () => {
            localStorage.removeItem('user');
            setUser(null);
        }
    ];
};
