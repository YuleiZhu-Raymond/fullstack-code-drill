import React from 'react';
import './ColorRenderer.css';

const ColorRenderer = () => {
    const colors = [
        {
            name: 'Charcoal',
            color: '#36454F'
        },
        {
            name: 'Queen Blue',
            color: '#436B95'
        },
        {
            name: 'Medium Turqoise',
            color: '#48D1CC'
        },
        {
            name: 'Orange Red',
            color: '#FF4500'
        }
    ];

    const handleColorClick = (color) => {
        document.body.style.backgroundColor = color;
    };

    return (
        <div className="color-renderer">
            <h1>Hello again</h1>
            {colors.map((colorObj) => (
                <button
                    key={colorObj.name}
                    onClick={() => handleColorClick(colorObj.color)}
                    style={{ backgroundColor: colorObj.color }}
                    className="color-button"
                >
                    {colorObj.name}
                </button>
            ))}
        </div>
    );
};

export default ColorRenderer;
