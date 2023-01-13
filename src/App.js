import './App.css';
import Card from './components/Card/Card'
import Data from './Data.json'

// {/* map ar jonno data json file , akta component ar app js ai tin ta needed. */}

function App() {

  return (
    <div className="App">
      <h1>Mapping</h1>
      {Data.map((item) => <Card titleText={item.title} description={item.desc}></Card>)}
    </div>

  );
}

export default App;
// Maping ar jonno ai command ta dekhun