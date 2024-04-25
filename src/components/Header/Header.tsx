import React, { useState } from 'react';
import styles from './Header.module.scss';
import headerLogo from '../../assets/header_logo.svg';
import cart from '../../assets/cart.svg';
import cartHover from '../../assets/cartHover.svg';
import burger from '../../assets/burger.svg';
import closeIcon from '../../assets/closeIcon.svg';
import { MOBILE_LARGE_WIDTH } from '../../constants';

const Header = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isCartOnHover, setIsCartOnHover] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src={headerLogo} alt="logo" />
                {window.innerWidth <= MOBILE_LARGE_WIDTH && (
                    <img
                        className={styles.burger}
                        onClick={() => setIsShowMenu((prev) => !prev)}
                        src={isShowMenu ? closeIcon : burger}
                        alt="burger"
                    />
                )}
            </div>
            {(window.innerWidth > MOBILE_LARGE_WIDTH || isShowMenu) && (
                <div className={styles.links}>
                    <span className={styles.link}>Home</span>
                    <span className={styles.link}>Products</span>
                    <img
                        onMouseMove={() => setIsCartOnHover(true)}
                        onMouseLeave={() => setIsCartOnHover(false)}
                        className={styles.cart__img}
                        src={isCartOnHover ? cartHover : cart}
                        alt="cart"
                    />
                </div>
            )}
        </div>
    );
};

export default Header;
