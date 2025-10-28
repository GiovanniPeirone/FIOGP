import styles from './header.module.css'

import Languaje from "../languaje/languaje";


export default function Header(){
    return(
        <header className={styles.header}>
            <nav>
                <a href="">Home</a>
                <Languaje /> 
            </nav>
        </header>
    );
}
