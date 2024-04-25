import React from 'react';
import styles from './Content.module.scss';
import Offer from '../Offer/Offer';
import Information from '../Information/Information';
import { SMALL_DESKTOP_WIDTH } from '../../constants';

const Content = () => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Offers</span>
            <div className={styles.offers}>
                <div className={`${styles.offer} ${styles.offer__borders}`}>
                    <Offer
                        title="Move the borders of reality!"
                        subtitle={
                            window.innerWidth <= SMALL_DESKTOP_WIDTH
                                ? 'Go on a space adventure'
                                : "Go on a space adventure - it's possible with us!"
                        }
                        size="large"
                    />
                </div>
                <div className={`${styles.offer} ${styles.offer__space}`}>
                    <Offer
                        title={`Space is not just stars and planets`}
                        subtitle="it is a majestic journey to"
                        size="medium"
                    />
                </div>
                <div className={`${styles.offer} ${styles.offer__stars}`}>
                    <Offer
                        title="For those who dream of stars"
                        subtitle="Our offer: make your dream come true"
                        size="medium"
                    />
                </div>
                <div className={`${styles.offer} ${styles.offer__dreams}`}>
                    <Offer
                        title="Fulfill your fantastic dreams"
                        subtitle="Space has never been so close"
                        size="large"
                    />
                </div>
            </div>
            <Information />
        </div>
    );
};

export default Content;
