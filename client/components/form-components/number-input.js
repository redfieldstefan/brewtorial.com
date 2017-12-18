import React from "react";
import classnames from "classnames";
import styles from "./index.css";

export default ({className, onChange, label, placholder, value}) => {

	const _onChange = (e) => {
		return onChange(e.target.value);
	};

	return (
		<div>
			<input 
				type="number"
				onChange={_onChange} 
				className={classnames(styles.number, className)}
				value={value ? value : 0}
			/>
			{
				label &&
				<label className={styles.label}>{label}</label>
			}
		</div>
	);

};