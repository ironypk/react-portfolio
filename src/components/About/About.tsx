import React from 'react'
import styles from './About.module.css'

export const About = () => {
    return (
        <div className={`section ${styles.about}`}>
            <div className={`container ${styles.about__container}`}>
                <div className={styles.about__info}>
                    Привет!<br/>
                    Меня зовут Бульба Константин<br/>
                    Я front-end разработчик
                </div>
                <div className={styles.about__photo_wrapper}>
                    <img src="" alt="Мое фото" className={styles.about__photo}/>
                </div>
            </div>
        </div>
    )
}