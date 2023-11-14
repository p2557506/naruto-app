import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom"


//Page Imports

import CharacterDex from './pages/characterDex/CharacterDex';
import Home from './pages/home/Home';
import Akatsuki from './pages/akatsukiPage/Akatsuki';
import TailedBeasts from './pages/tailedBeastsPage/TailedBeasts';
import Villages from './pages/villages/Villages';
import DedicatedCharacter from './pages/dedicatedCharacterPages/DedicatedCharacter';
import CharactersPage from './pages/characterPages/CharactersPage';
import KekkeiGenkai from './pages/kekkeiGenkaiPage/KekkeiGenkai';
import WatchingGuide from './pages/watchingGuide/WatchingGuide';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/watchingGuide" element = {<WatchingGuide/>}/>
            <Route path="/characterDex" element = {<CharacterDex/>}/>
            <Route path="/characters" element = {<CharactersPage/>}/>
            <Route path="/villages" element = {<Villages/>}/>
            <Route path="/akatsuki" element = {<Akatsuki/>}/>
            <Route path="/kekkeiGenkai" element = {<KekkeiGenkai/>}/>
            <Route path="/tailedBeasts" element = {<TailedBeasts/>}/>
            

            {/**Dedicated Character Page */}
            <Route path="/character/:id" element ={<DedicatedCharacter/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
