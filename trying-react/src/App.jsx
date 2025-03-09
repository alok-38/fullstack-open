import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './layouts/RootLayout';
import Article from './components/Article';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

const App = () => {
  useEffect(() => {
    // Dynamically set the language based on user preferences or other logic
    document.documentElement.lang = 'en';
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/article' element={<Article />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/navbar' element={<Navbar />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
