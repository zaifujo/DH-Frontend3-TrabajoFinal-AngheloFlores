import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout'
import { getCharacter } from '../../service/getCharacters';
import ButtonFavorite from '../../components/buttonFavorite/ButtonFavorite';
import { useFavorites } from "../../context/FavoritesContext";
import styles from "./Detail.module.css";

function Detail() {
  
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getCharacter(id).then(response => {
      setCharacter(response);
    });
  }, [id]);

  const { favorites } = useFavorites();

  const isFavorite = favorites.some((favorite) => favorite.id === character.id);

  return (
    <Layout>
      <main className={styles.CharacterDetail}>
        <article>
          <h2>{character.name}</h2>
          <img
            src={character.image} 
            alt={character.name} />
          <p>
            KI Total: {character.ki}
          </p>
          <p>
            {character.description}
          </p>
          <ButtonFavorite 
          character={character}
          isFavorite={isFavorite} />
        </article>
      </main>
    </Layout>
  );
}

export default Detail;