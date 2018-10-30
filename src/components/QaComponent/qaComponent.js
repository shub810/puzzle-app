import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQAList, addList } from '../../actions/index';

import Question from './question';
import Result from "./result";
import homeStyles from '../Home/home.css';
import styles from './style.css';

class QaComponent extends Component {

    state = {
        questionNumber: 1,
        isFinished: false,
        nextLabel : 'Next',
        selectButton: [0,0,0,0],
        selectedAns: {}
    }

    componentDidMount() {
        this.props.getQAList();
    }

    onClickHandler = (e) => {
        const selectedAns = {
            selectedAnswer: Number(e.target.value),           
            questionNumber : this.state.questionNumber
        }

        let selectButton = this.state.selectButton;
        selectButton.forEach((item, index) => {
            selectButton[index] = (index === Number(e.target.value)-1) ? 1 : 0;
        });
        
        this.setState({
            selectButton,
            selectedAns
        });
    }

    onNextHandler = () => {
        const index = this.state.selectButton.indexOf(1);
        if (index !== -1) {

            this.props.addList(this.state.selectedAns);

            this.setState({
                selectButton: [0,0,0,0],
                questionNumber : this.state.questionNumber + 1,
                isFinished : (this.state.questionNumber + 1 > this.props.qaList.length) ? true : false,
                nextLabel: (this.state.questionNumber + 1 === this.props.qaList.length) ? 'Finish' : 'Next'
            });
        }
    }

    render() {

        const { qaList } = this.props;
        const { questionNumber } =  this.state;
        
        if (!qaList) {
            return null;
        }
        return (
            <div className={homeStyles.board}>
                {
                    !this.state.isFinished ? 
                    (
                        <Fragment>
                            <h3 className={styles.qanumber}>Javascript Quiz {questionNumber} of {qaList.length}</h3>
                            <Question data={qaList[questionNumber - 1]} />
                            <div className={styles.pos_abs} onClick={this.onClickHandler}>
                                <button className={styles.btn + " " + (this.state.selectButton[0] ? styles.selectedAns : styles.bg_trans)} value={1}>A</button>
                                <button className={styles.btn + " " + (this.state.selectButton[1] ? styles.selectedAns : styles.bg_trans)} value={2}>B</button>
                                <button className={styles.btn + " " + (this.state.selectButton[2] ? styles.selectedAns : styles.bg_trans)} value={3}>C</button>
                                <button className={styles.btn + " " + (this.state.selectButton[3] ? styles.selectedAns : styles.bg_trans)} value={4}>D</button>
                            </div>
                            <div className={styles.pos_abs_next}>
                                <button className={styles.next_btn} onClick={this.onNextHandler}>{this.state.nextLabel}</button>
                            </div>
                        </Fragment>
                    )
                    :
                    (
                        <Result answerList={this.props.ansList} data={qaList}/>
                    )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        qaList: state.qaList,
        ansList: state.ansList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getQAList, addList }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(QaComponent);