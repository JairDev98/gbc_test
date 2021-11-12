import styles from './style.module.scss';

import { Link } from 'react-router-dom';

interface menuInterface{
    title: string;
    url: string;
}

export function Menu({ title, url }:menuInterface){
    return(
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <h4>Healthy Food</h4>
            </div>

            <div className={styles.containerRight}>
                <h4>HEALTHY RECIPES</h4>
                <h4>BLOG</h4>
                <h4>JOIN</h4>
                    <div className={styles.buttonElement}>
                        <h4>
                            <Link to={url}>{title}</Link>
                        </h4>
                    </div>
            </div>
        </div>
    )
}