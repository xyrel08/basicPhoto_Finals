import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {getImageUrl} from '../utils'


export const Navbar = () => {
    const [menuOpen, setMenuOpen]= useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>Home</a>
        <div className={styles.menu}>
        <img className={styles.menuButton} 
                src={
                    menuOpen ? getImageUrl("nav/closeIcon.png") 
                    : getImageUrl("nav/menuIcon.png") }
                alt="menu-button"
                onClick={()=>setMenuOpen(!menuOpen)}
            />
            <ul 
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={()=> setMenuOpen(false)}>
                    <li>
                        <a href='#about'>Members</a>
                    </li>
                   
                    <li>
                        <a href='#projects'>Gallery</a>
                    </li>
                    <li>
                        <a href='#compositions'>Composition</a>
                    </li>
                    <li>
                    <a href="assets/day4a.jpg" target="_blank">Best Photo</a>
                    </li>
                    
            </ul>
        </div>
    </nav>
  )
}

