
import styles from './style.module.scss';

interface CardProps{
    id:number;
    title:string;
    photo:string;
    name:string;
    author:string;
}

export function Card({ id, title, photo, name, author }: CardProps){
    return(
        <>
        <div key={id} className={styles.card}>
            <div className={styles.cardPhoto}>
                <img src={photo} alt={photo} />
            </div>

            <div className={styles.cardTextButton}>
                <h4>{title}</h4>
            </div>

            <div className={styles.cardAuthor}>
                <img src={author} alt={author}/>
                <h5>{name}</h5>
            </div>
        </div>
        </>
    )
}