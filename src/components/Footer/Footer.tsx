import React from 'react';
import styles from './Footer.module.scss';
import rocket from '../../assets/rocket.svg';

const Footer = () => {
    return (
        <div className={styles.container}>
            <img src={rocket} alt="rocket" />
            <span className={styles.text}>Exciting space adventure!</span>
        </div>
    );
};

export default Footer;
