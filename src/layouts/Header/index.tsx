import React from 'react'
import styles from './index.module.scss'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <a href="/">
                <img width={114} height={30} src="img/netflixLogo.jpg" alt="Netflix logo"/>
            </a>
            <div className={styles.buttons}>
                <button className={styles.btnSubscribe}>Підписатися</button>
                <button className={styles.btnLogin}>Увійти</button>
            </div>
        </header>
    )
}

export default Header
