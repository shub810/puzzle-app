import styles from "./style.css";
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class result extends Component {

    state = {
        result : 0,
        correct: 0,
        wrong: 0
    }

    componentDidMount() {
        var result = 0;
        console.log(this.props);
        this.props.answerList.forEach((ans, index) => {
            result += (ans.selectedAnswer === this.props.data[index].answer) ? 1 : 0;
        });
        this.setState({
            result,
            correct : (result * 100 / this.props.data.length).toFixed(2),
            wrong : ((this.props.data.length - result) * 100 / this.props.data.length).toFixed(2),
        })
    }

    render() {
        return (
            <div className={styles.result_box}>
                <div>
                    Your result : {this.state.result}/{this.props.data.length}
                </div>
                <div>
                    Correct answer : <span className={styles.right}>{this.state.correct} %</span>
                </div>
                <div>
                    Wrong answer : <span className={styles.wrong}>{this.state.wrong} %</span>
                </div>
                <div>
                    <Link to="/" className={styles.alink}>Want to retry?</Link>
                </div>
            </div>
        );
    }
}

export default result;