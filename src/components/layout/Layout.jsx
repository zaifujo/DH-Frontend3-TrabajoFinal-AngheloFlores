import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import styles from "./Layout.module.css";

function Layout({ children }) {
	return (
		<>
			<div className={styles.headerMain}>
				<Navbar />
				{children}
			</div>
			<Footer />
		</>
	);
}

export default Layout;
