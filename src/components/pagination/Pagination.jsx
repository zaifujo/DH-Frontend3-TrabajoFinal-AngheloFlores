import styles from "./Pagination.module.css";
import { useFavorites } from "../../context/FavoritesContext";

function Pagination() {
  
  const {page, previusPage, nextPage} = useFavorites();

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.paginationButton}
        onClick={() => previusPage(page - 1)}
        disabled={page === 1}>
        {"<"}
      </button>
      <div className={styles.paginationActive}>
        <span>
          {page}
        </span>
      </div>
      <button
        className={styles.paginationButton}
        onClick={() => nextPage(page + 1)} 
        disabled={page === 6}>
        {">"}
      </button>
    </div>
  )
}

export default Pagination;