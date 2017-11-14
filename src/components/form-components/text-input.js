import React, { Component } from "react";
import classnames from "classnames";
import styles from "./index.css";

export default ({className, onChange, placeholder, value}) => {
	
	const _onChange = (e) => {
		return onChange(e.target.value);
	}

	return (
		<input
			type="text"
			onChange={_onChange}
			className={classnames(className, styles.textInput)} 
			placeholder={placeholder} 
			value={value || ""}
		/>
	);
};