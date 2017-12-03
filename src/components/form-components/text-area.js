import React, { Component } from "react";
import classnames from "classnames";
import styles from "./index.css";

export default class TextInput extends Component {
	render() {
		
		const {
			className,
			onChange,
			placeholder,
			value
		} = this.props;

		const _onChange = (e) => {
			return onChange(e.target.value);
		}

		return (
			<textArea
				onChange={_onChange}
				className={classnames(className, styles.textArea)} 
				placeholder={placeholder} 
				value={value || ""}
			/>
		);
	}
};