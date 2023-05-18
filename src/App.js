import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MenuApi from './MenuApi'; // Import the MenuApi component
import ContainedButtons from "./buttondef";
import TextButtons from "./rosu";
import UTMCard from "./Card";
import ContainedButtons1 from "./Alert";
import BasicTextFields from "./Textfield";
import ComponentCuInputSiButon from "./textfieldsubmit";
import TodoList from "./toDoList";
import LoginButton from "./login";

function App() {
    const [showCard, setShowCard] = useState(false);
    const handleShowCard = () => {
        setShowCard(!showCard);
    };

    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const handleColorChange = (color) => {
        setBackgroundColor(color);
    };

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route
                    path="/home"
                    element={
                        <div className="App" id="root" style={{ backgroundColor }}>
                            <LoginButton />
                            <div id="App" className="colorbackgorund">
                                <TextButtons handleColorChange={handleColorChange} />
                            </div>
                            <h1>marius herghelegiu</h1>
                            <p>CR-201</p>
                            <div className="alert">
                                <ContainedButtons1 />
                            </div>
                            <div>
                                <ContainedButtons onClick={handleShowCard} />
                                <div className="tipacard">
                                    {showCard && <UTMCard color={backgroundColor} />}
                                    {showCard && <UTMCard color={backgroundColor} />}
                                    {showCard && <UTMCard color={backgroundColor} />}
                                </div>
                                <div className="butoane">
                                    <BasicTextFields />
                                </div>
                                <div className="butoane">
                                    <ComponentCuInputSiButon />
                                </div>
                            </div>
                            <div>
                                <TodoList />
                            </div>
                        </div>
                    }
                />
                <Route path="/gallery" element={<MenuApi />} />
            </Routes>
        </Router>
    );
}

export default App;