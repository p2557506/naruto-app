import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom"


//Page Imports

import CharacterDex from './pages/characterDex/CharacterDex';
import Home from './pages/home/Home';
import Akatsuki from './pages/akatsukiPage/Akatsuki';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/characterDex" element = {<CharacterDex/>}/>
            <Route path="/akatsuki" element = {<Akatsuki/>}/>
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
