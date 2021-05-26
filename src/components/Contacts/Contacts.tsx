import React from 'react'
import styles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={`section ${styles.contacts}`}>
            <div className={`container ${styles.contacts__container}`}>
                <h2>Контакты</h2>
                <form className={styles.contacts__form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <button type={'button'} className={styles.contacts__button}>Отправить</button>
            </div>
        </div>
    )
}