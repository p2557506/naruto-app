import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom"


//Page Imports
import Home from './home/Home';
import CharacterDex from './characterDex/CharacterDex';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/characterDex" element = {<CharacterDex/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
