import { useFavorites } from "../../context/FavoritesContext";
import styles from "./ButtonFavorite.module.css"

function ButtonFavorite({ character, isFavorite }) {

  const { addToFavorites, deleteToFavorites } = useFavorites();

  const textButton = !isFavorite 
    ? 'Agregar a favoritos' 
    : 'Eliminar de favoritos';

  const classNameButton = !isFavorite 
    ? styles.favoritesButton
    : styles.favoritesButtonRemove;

  const handleClick = (character) => {(!isFavorite 
    ? addToFavorites(character) 
    : deleteToFavorites(character.id)
  )};

  return (
    <button 
      className={classNameButton}
      onClick={() => handleClick(character)}>
      {textButton}
    </button>
  )
}

export default ButtonFavorite;