import React from 'react';
import styles from './Footer.module.css'


type SocialType = {
    name: string
    photo: string
    link: string
}
type SocialsTypes = SocialType[]


const socials:SocialsTypes = [{
    name: 'fb',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJE8vBPFmLcAKfgR4-l3mPZ0LRrkUfSvhG1w&usqp=CAU',
    link: '#'
}, {
    name: 'insta',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJE8vBPFmLcAKfgR4-l3mPZ0LRrkUfSvhG1w&usqp=CAU',
    link: '#'
}, {
    name: 'vk',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJE8vBPFmLcAKfgR4-l3mPZ0LRrkUfSvhG1w&usqp=CAU',
    link: '#'
}, {
    name: 'telegram',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJE8vBPFmLcAKfgR4-l3mPZ0LRrkUfSvhG1w&usqp=CAU',
    link: '#'
}]

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__container}`}>
              <h2>Бульба Константин</h2>
                <Social/>
                <div className={styles.social__copyright}>&#169; 2021 Все прав защищены </div>
            </div>
        </footer>
    )
}

export const Social = () => {
    return (
        <div className={styles.social}>
            <ul className={styles.social__list}>
                {socials.map((e, i) => {
                    return (
                        <li key={i} className={styles.social__item}>
                            <div className={styles.social__link_wrapper}>
                                <a href={e.link} className={styles.social__link}>
                                    <img src={e.photo} alt={e.name} className={styles.social__img}/>
                                </a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
