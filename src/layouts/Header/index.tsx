import React from 'react'
import styles from './index.module.scss'
import Button from '../../components/button'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <a href="/">
                <img width={114} height={30} src="img/netflixLogo.jpg" alt="Netflix logo"/>
            </a>
            <div className={styles.buttons}>
                <Button value="Підписатися" variant="contained"/>
                <Button value="Увійти" variant="outlined"/>
            </div>
        </header>
    )
}

export default Header
