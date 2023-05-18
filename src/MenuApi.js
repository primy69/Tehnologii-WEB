import React, { useState, useEffect } from 'react';

export default function MenuApi() {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setMenuData(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Photos</h1>
            <div className="menu-list">
                {menuData.map(item => (
                    <div key={item.id} className="menu-item">
                        <img src={item.thumbnailUrl} alt={item.title} className="menu-item-image" />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
