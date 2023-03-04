import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Books from './pages/Books';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
