import React from 'react';
import styles from "./home.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.board}>
            <button className={styles.startbox}> <Link to="/quiz" className={styles.alink}>Start Quiz</Link></button>
        </div>
    );
};

export default Home;

