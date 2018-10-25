import React from 'react';
import styles from "./style.css";

const Question = (props) => {
    return (
        <div className={styles.qa}>
            <h2 className={styles.question}>{props.data.text}?</h2>
            <div className={styles.answer}>
                <div>A. {props.data.options[0]}</div>
                <div>B. {props.data.options[1]}</div>
                <div>C. {props.data.options[2]}</div>
                <div>D. {props.data.options[3]}</div>
            </div>
        </div>
    );
};

export default Question;