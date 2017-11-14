import React, {Component} from "react";
import styles from "./step-icon.css";

export default class StepIcon extends Component {

	render() {

		const { icon, name, index, onClick } = this.props;

		const _onClick = () => {
			return onClick(index);
		};

		return (
			<div className={styles.stepIcon} onClick={_onClick}>
				{
					icon ?
					<img src={icon} className={styles.icon} /> :
					<span className={styles.placeholderIcon} />
				}
				{
					name && 
					<span className={styles.name}>{name}</span>
				}
			</div>
		);
	}
};