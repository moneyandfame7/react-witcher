import React from 'react'
import styles from './index.module.scss'
import {FILMS} from '../../data'
import Button from '../../components/button'

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
                            <span className={styles.itemInfo}>{FILMS[0].year}</span>
                            <span className={styles.itemSpacer}>|</span>
                            <span className={styles.itemInfoBorder}>{FILMS[0].limitAge}</span>
                            <span className={styles.itemSpacer}>|</span>
                            <span className={styles.itemInfo}>{FILMS[0].runtime}</span>
                            <span className={styles.itemSpacer}>|</span>
                            <span className={styles.itemInfo}>{FILMS[0].genre}</span>
                        </div>
                        <div className={styles.titleInfoWrapper}>
                            <div className={styles.description}>
                                {FILMS[0].description}
                            </div>
                            <div className={styles.members}>
                                <div>
                                    <span
                                        className={styles.member}>У ролях: </span> {FILMS[0].actors.map(actor => (actor + ','))}
                                </div>
                                <div>
                                    <span
                                        className={styles.member}>Автори: </span>{FILMS[0].authors.map(author => (author))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.heroImageContainer}>
                    <div style={{backgroundImage: `url(${FILMS[0].mainImage})`}} className={styles.heroImage}></div>
                </div>
            </div>
            <div className={styles.lookBar}>
                <svg className={styles.icon} focusable="false" viewBox="225 0 552 1000" aria-hidden="true"
                     data-uia="n-logo">
                    <defs>
                        <radialGradient id="b1a78af8-516a-4aff-8684-7ecdf0efabf8-a" r="75%"
                                        gradientTransform="matrix(.38 0 .5785 1 .02 0)">
                            <stop offset="60%" stop-opacity=".3"></stop>
                            <stop offset="90%" stop-opacity=".05"></stop>
                            <stop offset="100%" stop-opacity="0"></stop>
                        </radialGradient>
                    </defs>
                    <path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e"></path>
                    <path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e"></path>
                    <path d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225"
                          fill="url(#b1a78af8-516a-4aff-8684-7ecdf0efabf8-a)"></path>
                    <path d="M225 0l349 983c76 3 136 9 203 17L423 0H225" fill="#e50914"></path>
                </svg>
                <div className={styles.propWrapper}>
                    <div className={styles.prop}>Дивіться що завгодно.</div>
                    <Button variant="contained" value="Підписатися"/>
                </div>
            </div>
        </section>
    )
}

export default Main
