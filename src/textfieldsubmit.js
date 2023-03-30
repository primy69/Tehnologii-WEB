import React, { useState } from 'react';
import "./textfieldsubmit.css"

export default function ComponentCuInputSiButon() {
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        alert(`Mesajul este: ${inputValue}`);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={handleClick}>Afiseaza alert</button>
        </div>
    );
}
