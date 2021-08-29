import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Manager from './components/Manager';

function App() {
  const root = {
    // Apps: {
    //   InsideApps: {
    //     files: []
    //   },
    //   files: ["Portfolio.pdf", "Document.docx"]
    // },
    // Pictures: {
    //   files: []
    // },
    // files: ["original.pdf"],
    files: []
  }

  const [history, setHistory] = useState([root])
  const [rootLevel, setRootLevel] = useState(root)

  return (
    <div className="App">
      <Header root={rootLevel} setRoot={setRootLevel} history={history} setHistory={setHistory} />
      <Manager root={rootLevel} setRoot={setRootLevel} history={history} setHistory={setHistory} />
    </div>
  );
}

export default App;
