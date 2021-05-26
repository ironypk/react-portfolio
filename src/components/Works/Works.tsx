import React from 'react'
import styles from './Works.module.css'

type WorkTypes = {
    name:string
    description:string
    photo: string
}
type WorksTypes = WorkTypes[]

const works:WorksTypes = [
    {
        name:'Проект 1',
        description:'Краткое описание проекта 1',
        photo:'https://www.ixbt.com/img/n1/news/2019/5/3/chrome-73-mode-sombre-android_large.jpg'
    },
    {
        name:'Проект 2',
        description:'Краткое описание проекта 2',
        photo:'https://www.ixbt.com/img/n1/news/2019/5/3/chrome-73-mode-sombre-android_large.jpg'
    }
]


export const Works = () => {
    return (
        <div className={`section ${styles.work}`}>
            <div className={`container ${styles.work__container}`}>
                <h2>Мои работы</h2>
                <ul className={styles.work__list}>
                    {
                        works.map((e,i)=>{
                            return (
                                <li key={i} className={styles.work__item}>
                                    <div className={styles.work__image_wrapper}>
                                        <img src={e.photo} alt="картинка" className={styles.work__image_wrapper}/>
                                        <button type={'button'} className={styles.work__button}>
                                            Смотреть
                                        </button>
                                    </div>
                                    <div className={styles.work__info}>
                                        <div className={styles.work__name}>{e.name}</div>
                                        <div className={styles.work__description}>{e.description}</div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}