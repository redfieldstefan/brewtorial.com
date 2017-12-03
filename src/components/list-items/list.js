import React from "react";
import classnames from "classnames";
import styles from "./index.css";

export default ({children, className, placeholder}) => {
	console.log("children")
	console.log(children)

	return (
		<div className={classnames(styles.list, className)}>
			{
				!children.length ?
				<p className={styles.placeholder}>{placeholder}</p> :
				<ul className={styles.children}>
					{children}
				</ul>
			}
		</div>
	);
};