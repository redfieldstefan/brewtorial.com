import React from "react";
import classnames from "classnames";
import styles from "./index.css";

export default ({className, index, listLength, onClick, onDone}) => {
	return (
		<span className={classnames(styles.prevNextContainer, className)}>
		{
			index > 0 &&
			<button onClick={() => onClick(index - 1)} className={classnames(styles.prevNext, styles.prev)}>
				Previous
			</button>
		}
		{
			index < listLength - 1 ?
			<button onClick={() => onClick(index + 1)} className={classnames(styles.prevNext, styles.next)}>
				Save/Next
			</button> :
			<button onClick={onDone} className={classnames(styles.prevNext, styles.done)}>
				Done!
			</button>
		}
		</span>
	);
};