import styles from "./Home.module.css";
import Layout from "../../components/layout/Layout";
import CardCharacter from "../../components/cardCharacter/CardCharacter";
import Pagination from "../../components/pagination/Pagination";
import { useFavorites } from "../../context/FavoritesContext";

function Home() {

  const {characters} = useFavorites();

  return (
    <Layout>
      <main className={styles.characters}>
        <h1>Personajes</h1>
        <section className={styles.container}>
          {characters && characters.map((character) => (
            <CardCharacter 
              key={character.id} 
              character={character} />
          ))}
        </section>
        <Pagination />
      </main>
    </Layout>
  );
}

export default Home;
