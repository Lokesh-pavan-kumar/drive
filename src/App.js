import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Manager from './components/Manager';

function App() {

  // the commented part depicts an example structure
  // js object (hash table) is used to store folders
  // a list in a folder holds the files in it
  const root = {
    // Apps: {
    //   InsideApps: {
    //     files: []
    //   },
    //   files: []
    // },
    files: []
  }

  const [history, setHistory] = useState([root]) // a stack to track the path
  const [rootLevel, setRootLevel] = useState(root) // stores the level in rootLevel

  return (
    <div className="App">
      <Header root={rootLevel} setRoot={setRootLevel} history={history} setHistory={setHistory} />
      <Manager root={rootLevel} setRoot={setRootLevel} history={history} setHistory={setHistory} />
    </div>
  );
}

export default App;
