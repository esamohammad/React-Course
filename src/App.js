import './App.css';
import Cssstyle from './components/Cssstyle/Cssstyle';
import Mapping from './components/Mapping/Mapping';
import Props from './components/Props/Props';
import UniqueKey from './components/UniqueKey/UniqueKey';


const date = new Date();
const today = date.getDate();
const thisMonth = date.getMonth();
const thisYear = date.getFullYear();



function App() {
  return (
    <div className="App">
      <h1>🚑🏍This is The Test Transmission🏍🚒</h1>
      <h3>{thisYear}</h3>
      <h3>{today}</h3>
      <h3>{thisMonth}</h3>
      <p>{today + "/" + thisMonth + 1 + "/" + thisYear}</p>
      <Mapping></Mapping>
      <Props titleText='Call Mother' description='Take your medicine'></Props>
      <Props titleText='Call Father' description='Take your medicine'></Props>
      <UniqueKey />
      <Cssstyle />
    </div>

  );
}

export default App;
