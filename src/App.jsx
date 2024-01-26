// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';

import Navigation from './components/Navigation';
import Header from './components/Header';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;