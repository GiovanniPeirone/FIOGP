import styles from './header.module.css'

import Languaje from "../languaje/languaje";


export default function Header(){
    return(
        <header className={styles.header}>
            <nav>
                <a href="">Home</a>
                <a href="">Contactanos</a>
                <Languaje /> 
                <div>
                    <div className={styles.buttonOnDesplegable}>
                        <img src="menuvar.svg" alt="menu bar" height={15} />
                    </div>
                    <div>

                    </div>
                </div> 
            </nav>
        </header>
    );
}
