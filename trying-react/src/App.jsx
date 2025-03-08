import { useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Nav from './components/Nav';

const App = () => {
  useEffect(() => {
    // Dynamically set the language based on user preferences or other logic
    document.documentElement.lang = 'en';
  })
  return (
    <main>
      <Nav />
      <h1>Rsbuild with React</h1>
      <Button />
    </main>
  );
};

export default App;
