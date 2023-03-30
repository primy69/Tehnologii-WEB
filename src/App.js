import './App.css';
import ContainedButtons from "./buttondef";
import TextButtons from "./rosu";
import UTMCard from "./Card";
import {useState} from "react";
import ContainedButtons1 from "./Alert";
import BasicTextFields from "./Textfield";
import ComponentCuInputSiButon from "./textfieldsubmit";

function App() {
  const[showCard, setShowCard] = useState(false);
  const HandleShowCard = () => {
    setShowCard(!showCard)
  }
  return (
    <div className="App">

      <div id="App" className="colorbackgorund">
        <TextButtons/>
      </div>
        <h1>marius herghelegiu</h1>
        <p>CR-201</p>
      <div className="alert">
        <ContainedButtons1/>
      </div>
      <div>
        <ContainedButtons onClick={HandleShowCard} />
          <div className="tipacard">
              {showCard && <UTMCard />}
              {showCard && <UTMCard />}
              {showCard && <UTMCard />}
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
