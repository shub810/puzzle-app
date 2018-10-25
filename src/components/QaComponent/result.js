import React from 'react';
import styles from "./style.css";
import { Link } from 'react-router-dom';

const Result = (props) => {

    const getResult = () => {
        var result = 0;
        props.answerList.forEach((ans, index) => {
            result += (ans.selectedAnswer === props.data[index].answer) ? 1 : 0;
        });
        return result;
    }

    return (
        <div className={styles.result_box}>
            <div>
                Your result : {getResult()}/{props.data.length}
            </div>
            <div>
                Correct answer : <span className={styles.right}>{(getResult()*100/props.data.length).toFixed(2)} %</span>
            </div>
            <div>
                Wrong answer : <span className={styles.wrong}>{((props.data.length - getResult())*100/props.data.length).toFixed(2)} %</span>
            </div>
            <div>
                <Link to="/" className={styles.alink}>Want to retry?</Link>
            </div>
        </div>
    );
};

export default Result;