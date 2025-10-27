import { StyleRegistry } from 'styled-jsx';
import styles from './carrusel.module.css'

type img = {
    imgs : string[]
}

export default function Carrusel({ imgs } : img){
    return ( 
        <div className={styles.carruselConteiner}>
            <div className={styles.imgConteiner}>
                <p>{imgs}</p>
            </div>
            <div>
                <button>Left</button>
                <button>Right</button>
            </div>
        </div>

    );
}




