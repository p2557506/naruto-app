import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom"


//Page Imports

import CharacterDex from './pages/characterDex/CharacterDex';
import Home from './pages/home/Home';
import Akatsuki from './pages/akatsukiPage/Akatsuki';
import TailedBeasts from './pages/tailedBeastsPage/TailedBeasts';
import Villages from './pages/villages/Villages';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/characterDex" element = {<CharacterDex/>}/>
            <Route path="/villages" element = {<Villages/>}/>
            <Route path="/akatsuki" element = {<Akatsuki/>}/>
            <Route path="/tailedBeasts" element = {<TailedBeasts/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
