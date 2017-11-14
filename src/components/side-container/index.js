import React from "react";
import styles from "./side-container.css";

const SideContainer = ({children}) => (
	<div className={styles.sideContainer}>
		<span className={styles.content}>
			{children}
		</span>
	</div>
);

export default SideContainer;