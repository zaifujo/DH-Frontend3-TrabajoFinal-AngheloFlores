import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Contact from './pages/contact/Contact';
import Favorites from "./pages/favorites/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Detail />}></Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  )
}

export default App;
