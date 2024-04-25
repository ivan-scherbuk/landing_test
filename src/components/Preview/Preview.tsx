import React from 'react';
import styles from './Preview.module.scss';
import world from '../../assets/earth.png';
import UIButton from '../UIButton/UIButton';

const Preview = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <span className={styles.header}>
                    Discover the vast expanses of{' '}
                    <span className={styles.header__highlight}>space</span>
                </span>
                <span className={styles.content}>
                    Where the possibilities are{' '}
                    <span className={styles.content__highlight}>endless!</span>
                </span>
                <UIButton title="Learn more" />
            </div>
            <img className={styles.img} src={world} alt="world" />
        </div>
    );
};

export default Preview;
