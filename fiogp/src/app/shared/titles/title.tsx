import styles from './title.module.css'

type Title = {
    title : string
} 

export default function Title({title} : Title){
    return(
        <h1 className={styles.titleClass}>{title}</h1>
    );
}