import './App.css';
import CatFact from './components/CatFact';
import Excuser from './components/Excuser';
import PredictAge from './components/PredictAge';

function App() {
  return (
    <div className="App">
       <u> <h3 className="title" style={{color:"purple"}}> Fetching APIs in React </h3> </u>
      <CatFact/>
      <PredictAge/>
      <Excuser/>
     
    </div>
  );
}

export default App;
