
import './App.css';
import Category from './Components/Category';
import Hero from './Components/Hero-Section';
import Navbar from './Components/Navbar';
import Prastavit from './Components/Prastavit';
import Object from './Components/Object.jsx';
import MajaGav from './Components/MajaGav.jsx';
import Pratisad from './Components/Pratisad.jsx';
// import Purva from './Components/Purva.jsx';
import Que from './Components/'
import Footer from './Components/Footer.jsx';


function App() {
  return (
  

    <div>
    <Navbar/>
    <Hero/>
    <Prastavit/>
    <Category/>
    <Object/>
    <MajaGav/>
    <Pratisad/>
    {/* <Purva/> */}
   <Que/>
    <Footer/>
    

    </div>
  );
}

export default App;
