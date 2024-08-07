import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import FormsSection from './components/FormsSection';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <FormsSection/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;