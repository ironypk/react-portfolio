import React from 'react'
import styles from './Remote.module.css'

export const Remote = () => {
    return (
        <div className={`section ${styles.remote}`}>
            <div className={`container ${styles.remote__container}`}>
                <h2>Рассматриваю варианты удаленной работы</h2>
                <button type={'button'} className={styles.remote__button}>Нанять меня</button>
            </div>
        </div>
    )
}