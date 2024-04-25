import React, { useState } from 'react';
import styles from './Information.module.scss';

const mocked_text =
    'Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum';

const Information = () => {
    const [isShowFull, setIsShowFull] = useState(false);

    return (
        <div className={styles.container}>
            <span className={styles.title}>Embark on a space journey</span>
            <span className={styles.text}>
                {isShowFull ? mocked_text : mocked_text.slice(0, 637)}
            </span>
            <button
                onClick={() => setIsShowFull((prev) => !prev)}
                className={styles.button}
            >
                {isShowFull ? 'Show less' : 'Read more'}
            </button>
        </div>
    );
};

export default Information;
