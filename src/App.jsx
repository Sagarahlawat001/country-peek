import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import CountryPage from './pages/CountryPage.jsx';
import Favourites from './pages/Favourites.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* Header always visible */}
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<CountryPage />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;