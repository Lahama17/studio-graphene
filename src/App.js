import Navbar from './Components/Navbar';
import './App.css';
import Logosecion from './Components/Logosecion';
import image from "./background1.png"; 
import DropdownMenu from './Components/DropdownMenu';
import Banner from './Components/Banner';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import Bottom from './Components/Bottom';


function App() {
  return (   
        <>
        <div className='background' style={{ backgroundImage:`url(${image})` }}>
    </div>
        <Navbar/>
        <Logosecion/>
        <DropdownMenu/>
        <Banner/>
        <Newsletter/>
        <Footer/>
        <Bottom/>



      
        

        </>
        
  );
};

export default App;
