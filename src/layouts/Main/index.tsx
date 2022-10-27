import React from 'react'
import styles from './index.module.scss'
import {FILMS} from '../../data'

const Main: React.FC = () => {
    return (
        <section className={styles.sectionHero}>
            {/*TODO: описать типы для объекта фильмы, вынести отдельные компоненты, сделать на каждую страницу отдельный запрос на /witcher*/}
            {/*TODO: дописать классы и стили для информации*/}
            <div className={styles.heroContainer}>
                <div className={styles.infoContainer}>
                    <div className={styles.logoContainer}>
                        <img src={FILMS[0].logo} alt={FILMS[0].name + ' лого'}/>
                    </div>
                    <div className={styles.detailsContainer}>
                        <h1 className={styles.nameInfo}>{FILMS[0].name}</h1>
                        <div className={styles.metadataInfo}>
                            <span className={styles.itemYear}>{FILMS[0].year}</span>
                            <span className={styles.itemLimit}>{FILMS[0].limitAge}</span>
                            <a className={styles.itemRuntime} href="#">{FILMS[0].amountSeasons}</a>
                        </div>
                        <div className={styles.titleInfoWrapper}>
                            <div className={styles.description}>
                                {FILMS[0].description}
                            </div>
                            <div className={styles.member}>
                                <div className={styles.actors}>{FILMS[0].actors.map(actor => (actor))}</div>
                                <div className={styles.authors}>{FILMS[0].authors.map(author => (author))}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.heroImageContainer}>
                    <div style={{backgroundImage: `url(${FILMS[0].mainImage})`}} className={styles.heroImage}></div>
                </div>
            </div>
        </section>
    )
}

export default Main
