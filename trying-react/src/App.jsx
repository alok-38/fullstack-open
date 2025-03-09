import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './layouts/RootLayout';

const App = () => {
  useEffect(() => {
    // Dynamically set the language based on user preferences or other logic
    document.documentElement.lang = 'en';
  })
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
