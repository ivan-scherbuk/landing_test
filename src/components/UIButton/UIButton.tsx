import React from 'react';
import styles from './UIButton.module.scss';

interface UIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    outlined?: boolean;
    customClass?: string;
}

const UIButton = ({
    title,
    outlined,
    customClass,
    ...props
}: UIButtonProps) => {
    return (
        <button
            className={`${styles.container} ${
                outlined ? styles.container__outlined : ''
            } ${customClass}`}
            {...props}
        >
            {title}
        </button>
    );
};

export default UIButton;
