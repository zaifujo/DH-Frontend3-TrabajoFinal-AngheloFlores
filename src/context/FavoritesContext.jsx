import { createContext, useContext, useState, useEffect } from "react";
import { getAllCharacters } from "../service/getCharacters";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllCharacters(page).then(data => {
      setCharacters(data)
    });
  }, [page]);

  const previusPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);

  const [favorites, setFavorites] = useState(() => {
    const favoritesLocalStorage = localStorage.getItem("favoritesDBS");
    return favoritesLocalStorage ? JSON.parse(favoritesLocalStorage) : [];
  });

  const addToFavorites = (character) => {
    setFavorites((prevState) => [...prevState, character]);
    localStorage.setItem("favoritesDBS", JSON.stringify([...favorites, character]));
  };

  const deleteToFavorites = (id) => {
    setFavorites((prevState) => prevState.filter((character) => character.id != id));
    localStorage.setItem("favoritesDBS", JSON.stringify(favorites.filter((character) => character.id != id)));
  };

  return (
    <FavoritesContext.Provider 
      value={{
        characters,
        page,
        previusPage,
        nextPage,
        favorites,
        addToFavorites,
        deleteToFavorites,
      }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);