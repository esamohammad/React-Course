import './App.css';
import Cssstyle from './components/Cssstyle/Cssstyle';
import Mapping from './components/Mapping/Mapping';
import Props from './components/Props/Props';
import UniqueKey from './components/UniqueKey/UniqueKey';
import data from './data.json'


const date = new Date();
const today = date.getDate();
const thisMonth = date.getMonth();
const thisYear = date.getFullYear();


function App() {
console.log(data[0].title);

  return (
    <div className="App">
      <h1>🚑🏍This is The Test Transmission🏍🚒</h1>
      <h1>Css Style  Component</h1>
      <Cssstyle />
      <h1>Date Component</h1>
      <h3> Date : {thisYear}</h3>
      <h3>Ajker Tarikh:{today}</h3>
      <h3>Month: {'' + thisMonth + 1}</h3>
      <p>Today Date: {today + "/" + thisMonth + 1 + "/" + thisYear}</p>
      <h1>Props Component</h1>
      
      <Props titleText={data[0].title} description={data[0].desc}></Props>

      <Props titleText={data[1].title} description={data[1].desc}></Props>

      <Props titleText={data[2].title} description={data[2].desc}></Props>

      <Props titleText={data[3].title} description={data[3].desc}></Props>

      <Props titleText={data[4].title} description={data[4].desc}></Props>

      <Props titleText='Call Father' description='Take your medicine'></Props>
      <h1>Mapping Component</h1>
      <Mapping></Mapping>
      <h1>Unique Key Component</h1>
      <UniqueKey />
    </div>

  );
}

export default App;
