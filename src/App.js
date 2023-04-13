import React, { useState } from 'react';
import './App.css';
import ContainedButtons from "./buttondef";
import TextButtons from "./rosu";
import UTMCard from "./Card";
import ContainedButtons1 from "./Alert";
import BasicTextFields from "./Textfield";
import ComponentCuInputSiButon from "./textfieldsubmit";

function App() {
    const[showCard, setShowCard] = useState(false);
    const HandleShowCard = () => {
        setShowCard(!showCard)
    }
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');

    const handleColorChange = (color) => {
        setBackgroundColor(color);
    };

    return (
        <div className="App" id="root" style={{ backgroundColor }}>

            <div id="App" className="colorbackgorund">
                <TextButtons handleColorChange={handleColorChange} />
            </div>
            <h1>marius herghelegiu</h1>
            <p>CR-201</p>
            <div className="alert">
                <ContainedButtons1/>
            </div>
            <div>
                <ContainedButtons onClick={HandleShowCard} />
                <div className="tipacard">
                    {showCard && <UTMCard color={backgroundColor} />}
                    {showCard && <UTMCard color={backgroundColor} />}
                    {showCard && <UTMCard color={backgroundColor} />}
                </div>
                <div className="butoane">
                    <BasicTextFields/>
                </div>
                <div className="butoane">
                    <ComponentCuInputSiButon/>
                </div>
            </div>
        </div>
    );
}

export default App;
