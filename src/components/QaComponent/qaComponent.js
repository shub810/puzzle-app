import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQAList } from '../../actions/index';

import Question from './question';
import Result from "./result";
import homeStyles from '../Home/home.css';
import styles from './style.css';

class QaComponent extends Component {

    state = {
        questionNumber: 1,
        answerList: [],
        isFinished: false,
        nextLabel : 'Next',
        selectButton: [0,0,0,0]
    }

    componentDidMount() {
        this.props.getQAList();
    }

    onClickHandler = (e, selectedAnswer) => {
        const ans = {
            selectedAnswer,            
            questionNumber : this.state.questionNumber
        }

        let answerList = this.state.answerList;
        answerList[this.state.questionNumber-1] = ans;

        let selectButton = this.state.selectButton;
        selectButton.forEach((item, index) => {
            selectButton[index] = (index === selectedAnswer-1) ? 1 : 0;
        });
        
        this.setState({
            answerList,
            selectButton
        });
    }

    onNextHandler = () => {
        const index = this.state.selectButton.indexOf(1);
        if (index !== -1) {
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
                            <div className={styles.pos_abs}>
                                <button className={styles.btn + " " + (this.state.selectButton[0] ? styles.selectedAns : styles.bg_trans)} onClick={(e) => this.onClickHandler(e, 1)}>A</button>
                                <button className={styles.btn + " " + (this.state.selectButton[1] ? styles.selectedAns : styles.bg_trans)} onClick={(e) => this.onClickHandler(e, 2)}>B</button>
                                <button className={styles.btn + " " + (this.state.selectButton[2] ? styles.selectedAns : styles.bg_trans)} onClick={(e) => this.onClickHandler(e, 3)}>C</button>
                                <button className={styles.btn + " " + (this.state.selectButton[3] ? styles.selectedAns : styles.bg_trans)} onClick={(e) => this.onClickHandler(e, 4)}>D</button>
                                <button className={styles.next_btn} onClick={this.onNextHandler}>{this.state.nextLabel}</button>
                            </div>
                            <div>
                                
                            </div>
                        </Fragment>
                    )
                    :
                    (
                        <Result answerList={this.state.answerList} data={qaList}/>
                    )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        qaList: state.qaList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getQAList }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(QaComponent);