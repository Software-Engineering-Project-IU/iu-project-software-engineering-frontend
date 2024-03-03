import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <ul className={styles.navLeft}>
                    <li><Link className={styles.logo} to="/">Quiz-App</Link> </li>
                </ul>
            </div>
            <div>
                <ul className={styles.navLeft}>
                    <li><Link to="/">Start Quiz</Link></li>
                </ul>
            </div>
            <ul className={styles.navLeft}>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar;