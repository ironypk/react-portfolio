import React from 'react'
import styles from './Skills.module.css'


type SkillTypes = {
    name:string
    description:string
}

type SkillsTypes = SkillTypes[]

const skills:SkillsTypes = [
    {name:'React', description:'UI библиотека'},
    {name:'Redux', description:'state manager'},
    {name:'Redux-thunk', description:'DAL level'},
]


export const Skills = () => {
    return (
        <div className={`section ${styles.skills}`}>
            <div className={`container ${styles.skills__container}`}>
                <h2>Мои скиллы</h2>
                <ul className={styles.skills__list}>
                    {
                        skills.map((e,i)=>{
                            return (
                                <li className={styles.skills__item} key={i}>
                                    <div className={styles.skills__name}>{e.name}</div>
                                    <div className={styles.skills__description}>{e.description}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}