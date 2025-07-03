import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/message')
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(err => console.error('Error fetching message:', err));
    }, []);

    return (
        <div className="App">
            <h1>TechNova Digital Ltd.</h1>
            <p>Message from backend: {message}</p>
        </div>
    );
}

export default App;
