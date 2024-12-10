import {useNavigate} from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import styles from "./CardCharacter.module.css"
import ButtonFavorite from "../buttonFavorite/ButtonFavorite";

function CardCharacter({ character }) {
  
  const navigate = useNavigate();
  
	const handleClick = (id) => {
    navigate(`/character/${id}`);
	};
  
  const { favorites } = useFavorites();
  
  const isFavorite = favorites.some((favorite) => favorite.id === character.id);

  return (
    <article className={styles.cardContainer}>
      <main>  
        <img 
          className={styles.cardImage}
          src={character.image} 
          alt={character.name} 
          role="img"
          onClick={() => handleClick(character.id)} />
      </main>
      <footer className={styles.cardDetail}>
        <div>
          <h2 className={styles.cardTitle}>
            {character.name}
          </h2>
        </div>
        <ButtonFavorite 
          character={character} 
          isFavorite={isFavorite} />
      </footer>
    </article>
  );
};

export default CardCharacter;