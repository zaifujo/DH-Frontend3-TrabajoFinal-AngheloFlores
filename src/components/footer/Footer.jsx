import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          © 2024 Dragon Ball Fan Project. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer