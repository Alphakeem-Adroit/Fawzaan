import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToHashElement from './components/utilities/ScrollToHashElement';
// import Error from './pages/Error';
import Home from './pages/Home';
import FloatingActions from './components/utilities/FloatingActions';
// import Tourism from './pages/Tourism';
// import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <FloatingActions />
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/tourism" element={<Tourism />} />
        <Route path="/contact" element={<Contact />} /> */}

        {/* Catch-all 404 Route for any invalid URL */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
