import './App.css';
import Mapping from './components/Mapping/Mapping';


const date= new Date();
const today=date.getDate();
const thisMonth=date.getMonth();
const thisYear=date.getFullYear();



function App() {
  return (
    <div className="App">
      <h1>🚑🏍This is The Test Transmission🏍🚒</h1>
      <h3>{thisYear}</h3>
      <h3>{today}</h3>
      <h3>{thisMonth}</h3>
<p>{today+"/"+thisMonth+1+"/"+thisYear}</p>
<Mapping></Mapping>
    </div>
    
  );
}

export default App;
