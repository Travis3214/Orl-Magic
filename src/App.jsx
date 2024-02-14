// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
      <div className='main'>
        <div className='contentWrap'>
          <Header />
          <Navigation />
          <Outlet />
        </div>
        <div>
           <Footer />
        </div>
      </div>
  );
}

export default App;