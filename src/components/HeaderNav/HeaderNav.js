import React from 'react'
import styles from './HeaderNav.module.css'
import {ReactComponent as BackButton} from '../../assets/backArrow.svg'

const HeaderNav = () => {
    return (
        <div className={styles.container}>
        <BackButton/>
            <div className={styles.heading}>Your Rewards</div>
        </div>
    )
}

export default HeaderNav
