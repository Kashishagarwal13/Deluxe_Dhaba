import { useState , useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import viteLogo from '/vite.svg'
import './App.css'
import Preloader from './components/Preloader';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed
  }, []);

  


  return (
    <div className="app">
      {isLoading ? <Preloader /> : (  <Routes>
      <Route path="/" element={<Layout />}> {/* Wrap all routes with Layout */}
        <Route index element={<Home  />} />
        <Route path="about" element={<About />} />
        <Route path='menu' element={<Menu />} />
        <Route path='contactus' element={<Contact />} />
      </Route>
    </Routes>)}
    </div>

  
  );
      };


export default App;
