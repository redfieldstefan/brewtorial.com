import React from "react";
import classnames from "classnames";
import logo from "../../images/brewtorial-logo.png";
import styles from "./nav.css";

const Nav = ({className}) => {
	return (
		<div className={classnames(className, styles.nav)}>
			<span className={styles.navLeft}>
				<img src={logo} className={styles.logo} />
				<ul className={styles.list}>
					<li><a href="">Home</a></li>
					<li><a href="">Recipes</a></li>
					<li><a href="/create-brew">Create</a></li>
				</ul>
			</span>
			<ul className={styles.signIn}>
				<li><a href="/sign-in">Sign In</a></li>
			</ul>
		</div>
	);
};

export default Nav;