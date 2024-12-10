import {Link, useNavigate} from "react-router-dom";
import Logo from "../../assets/logo-dbs.png";
import styles from "./Navbar.module.css";

const Navbar = () => {

	const navigate = useNavigate();

	const handleNavigateToHome = () => {
		navigate("/");
	};

	return (
		<header className={styles.navbarContainer} >
			<div 
				className={styles.navbarDetail}
				onClick={handleNavigateToHome}
				>
				<img 
					src={Logo} 
					alt="logo dbz" 
					width={240} height={60} 
					/>
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/">PERSONAJES</Link>
					</li>
					<li>
						<Link to="/favorites">FAVORITOS</Link>
					</li>
					<li>
						<Link to="/contact">CONTACTO</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Navbar;