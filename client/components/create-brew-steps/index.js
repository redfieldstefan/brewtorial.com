import React, { Component } from "react";
import styles from "./create-brew-steps.css";

export default class CreateBrewSteps extends Component {
	render () {
		return (
			<div className={styles.createBrewSteps}>
				{this.props.children}
			</div>
		);
	}
}