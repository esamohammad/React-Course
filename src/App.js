import './App.css';
import Card from './components/Card/Card'
import Data from './Data.json'

// {/* map ar jonno data json file , akta component ar app js ai tin ta needed. */}

function App() {

  let items = [];

  items = Data.map((item) => <Card titleText={item.title} description={item.desc}></Card>)

  return (
    <div className="App">
      <h1>Mapping</h1>
      {items}
    </div>

  );
}

export default App;
