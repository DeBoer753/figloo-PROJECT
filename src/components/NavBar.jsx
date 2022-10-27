// REACT:
import React from 'react'

// REACT ROUTER:
import { Link} from 'react-router-dom'

// CSS:
import styles from '../css/NavBar.module.css'

// NAVBAR:  
export default function NavBar() {
  return (
    <>
      <nav className={styles.headerBar}>
        <div className={styles.leftHeader}>
             {/* <img class="figlooLogo" src="./figlooLogo.png" alt="">  */}
            <h1>Figloo</h1>
        </div>
        <div className={styles.middleHeader}>
            <h5 className={styles.navLinks}>
                <Link to='/'>Home</Link>
                <Link to='/Profile'>Profile</Link>
                <Link to='/Crypto'>Crypto</Link>
                <Link to='/Stocks'>Stocks</Link>
                <Link to='/RealEstate'>Real Estate</Link>
                <Link to='/Watchlist'>Watchlist</Link>
                <Link to='/News'>News</Link>
            </h5>
        </div>
            <div className={styles.rightSideHeader}>
                <button className={styles.signUpButton}>Sign Up</button>
                <button className={styles.logInButton}>Log In</button>
            </div>
      </nav>
    </>
  )
}


