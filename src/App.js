import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Pricing from './components/Pricing/Pricing'; 
import Blog from './components/Blog/Blog';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/pricing' element={<Pricing />}/>
      <Route path='/blog' element={<Blog />}/>
    </Routes>
  );
}

export default App;
