import React from 'react';
import styles from './Offer.module.scss';
import UIButton from '../UIButton/UIButton';

type OfferProps = {
    title: string;
    subtitle: string;
    size: 'medium' | 'large';
};

const Offer = ({ title, subtitle, size }: OfferProps) => {
    return (
        <div className={styles.container}>
            <span
                className={`${styles.header} ${
                    size === 'medium' ? styles.header__medium : ''
                }`}
            >
                {title}
            </span>
            <span
                className={`${styles.content} ${
                    size === 'medium' ? styles.content__medium : ''
                }`}
            >
                {subtitle}
            </span>
            <UIButton title="Learn more" outlined />
        </div>
    );
};

export default Offer;
