import React from 'react'
import styles from './index.module.scss'

interface ButtonProps {
    value: string
    variant: string
}

const Button: React.FC<ButtonProps> = ({value, variant}) => {
    return (
        <button
            className={variant === 'contained' ? styles.buttonContained + ' ' + styles.button : styles.buttonOutlined + ' ' + styles.button}>{value}</button>
    )
}

export default Button
