import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Brains')
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const names = ['Bomba', 'Brains', 'Jugoslav'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count + 1)
        console.log(count)
    }

    return (
        <main>
            <p onDoubleClick={handleNameChange}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Promeni ime!</button>
            <p onDoubleClick={handleClick}>
                Brojac {count}.
            </p>
            <button onClick={handleClick}>Povecaj broj!</button>
        </main >
    )
}

export default Content;