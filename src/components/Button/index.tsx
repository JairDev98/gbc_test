import styles from './style.module.scss';

interface ButtonInterface{
    text: string;
}

export function Button({ text }:ButtonInterface){
   return(
    <div className={styles.container} >
        <h5>{text}</h5>
    </div>
   )
}