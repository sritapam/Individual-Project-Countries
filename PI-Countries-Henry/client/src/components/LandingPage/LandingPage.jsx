import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import styles from './LandingPage.module.css'

export default function LandingPage(){
    return (
        <div className={styles.all}>
        <div className={styles.bkg}/>
        <div className={styles.container}>
        <NavBar/>
            <div className={styles.letters}>
            <h2 className={styles.h2}>Discover amazing</h2>
            <h2 className={styles.h2b}>places</h2>
            <h1 className={styles.h1}> The trip of your life starts here! </h1>
            <Link to = '/home'>
                <button className={styles.button}>Click me!</button>
            </Link>
            <div>
            <footer className={styles.footer}>
            Travel Agency Website
            </footer>
            </div>
            </div>
            </div>
        </div>
    )
}