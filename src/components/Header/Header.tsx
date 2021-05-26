import React from 'react';
import styles from './Header.module.css'

const navbar = ['Главная', 'Скиллы', 'Работы', 'Контакты']

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.header__container}`}>
                <Navbar/>
            </div>
        </header>
    )
}

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul className={styles.navbar__list}>
                {navbar.map((e, i) => {
                    return (
                        <li key={i} className={styles.navbar__item}>
                            <a href="#" className={styles.navbar__link}>{e}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}