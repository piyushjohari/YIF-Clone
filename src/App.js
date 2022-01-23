import './App.css';
import Navbar from './Components/Navbar';
import Front from './Components/Front';
import { Info } from './Components/Info';
import Info1 from './Components/Info1';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Front />
      <Info />
      <Info1 />
      <Footer></Footer>
    </div>
  );
}

export default App;
