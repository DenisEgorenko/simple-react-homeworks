import React from 'react'
import {NavLink} from 'react-router-dom';

import styles from './Header.module.css'

function Header() {

    return (
        <div className={styles.headerBlock}>

            <NavLink className={styles.navlink} to="/pre-junior">
                {({isActive}) => (
                    <span className={isActive ? styles.activeNavLink : undefined}>
                        Pre-Junior
                    </span>
                )}
            </NavLink>


            <NavLink className={styles.navlink} to="/junior">
                {({isActive}) => (
                    <span className={isActive ? styles.activeNavLink : undefined}>
                        Junior
                    </span>
                )}
            </NavLink>


            <NavLink className={styles.navlink} to="/junior-plus">
                {({isActive}) => (
                    <span className={isActive ? styles.activeNavLink : undefined}>
                        Junior-Plus
                    </span>
                )}
            </NavLink>

            <div className={styles.headerButton}>
                <img src={'img_1.png'}/>
            </div>

        </div>
    )
}

export default Header
