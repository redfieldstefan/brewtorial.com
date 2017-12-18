import React from "react";
import classnames from "classnames";
import styles from "./index.css";

export default ({className, onClick, item, index}) => {

	return (
		<li onClick={onClick} className={classnames(styles.item, className)}>
			<p className={styles.text}>
				<span className={styles.name}>
					{item.equipment}
				</span>
			</p>
			<button className={styles.clear}>
				<span className="x-symbol">&#9747;</span>
			</button>
		</li>
	)
}