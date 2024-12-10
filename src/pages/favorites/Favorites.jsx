import styles from "./Favorites.module.css";
import CardCharacter from "../../components/cardCharacter/CardCharacter";
import Layout from "../../components/layout/Layout";
import { useFavorites } from "../../context/FavoritesContext";
import Buu from "../../assets/buu.png";

function Favorites() {

  const { favorites } = useFavorites();

  return (
    <Layout>
      <main className={styles.favorites}>
        <h1>Favoritos ({favorites.length})</h1>
        {favorites.length === 0? (
          <>
            <img 
              src={Buu} 
              alt="logo dbz" 
              width={240}
              />
            <h3>NO TIENES PERSONAJES FAVORITOS</h3>
          </>
        ) : (
          <section className={styles.container}>
            {favorites && favorites.map((character) => (
              <CardCharacter 
                key={character.id} 
                character={character} />
            ))}
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Favorites;