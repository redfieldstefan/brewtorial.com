import classnames from "classnames";
import React, {Component} from "react";
import styles from "./step-icon.css";

export default class StepIcon extends Component {

	render() {

		const { active, className, icon, name, index, onClick } = this.props;

		const _onClick = () => {
			return onClick(index);
		};

		return (
			<div className={classnames(className, styles.stepIcon, active ? styles.active : null)} onClick={_onClick}>
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
