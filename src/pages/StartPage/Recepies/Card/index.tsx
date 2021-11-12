import styles from './style.module.scss';

import { Button } from '../../../../components/Button';

interface CardProps {
    id: number;
    photo: string;
    title: string;
}


export function Card({ id, photo, title }: CardProps){
    return(
        <div key={id} className={styles.card}>
            <div className={styles.cardPhoto}>
                <img src={photo} alt={photo} />
            </div>

            <div className={styles.cardTextButton}>
                <h4>{title}</h4>
                <Button text={"See Recipe"} />
            </div>
        </div>
    )
}