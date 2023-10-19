
import './App.css';
import Footer from './Components/Monu/Nav & Footer/Footer';
import {Nav} from './Components/Monu/Nav & Footer/Nav';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
    
      <Nav />
     <AllRoutes />
     <Footer />
    </div>
  );
}

export default App;
