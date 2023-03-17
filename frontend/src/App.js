import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import CopyrightSharpIcon from '@mui/icons-material/CopyrightSharp';

// pages and components
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <div className='content-wrap'>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
            </Routes>
          
          </div>
          <footer className="footer"> 
            <span className='material-symbols-outlined'>copyright</span> 
            
            2023 Patrick Dunn</footer>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
