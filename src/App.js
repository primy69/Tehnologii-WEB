import './App.css';
import ContainedButtons from "./buttondef";
import TextButtons from "./rosu";
import UTMCard from "./Card";

function App() {
  return (
    <div className="App">
      <div id="root" className="colorbackgorund">
        <TextButtons/>
      </div>
    <h1>marius herghelegiu</h1>
      <p>CR-201</p>
      <div className="butoane">
        <ContainedButtons/>
      </div>
      <div className="tipacard">
        <UTMCard/>
        <UTMCard/>
        <UTMCard/>
      </div>
    </div>
  );
}

export default App;
