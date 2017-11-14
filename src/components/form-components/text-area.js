import React, { Component } from "react";
import classnames from "classnames";
import styles from "./index.css";

export default class TextInput extends Component {
	render() {
		
		const {
			className,
			placeholder
		} = this.props;

		return (
			<textArea
				className={classnames(className, styles.textArea)} 
				placeholder={placeholder} 
			/>
		);
	}
};