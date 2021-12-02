import styles from './style.module.scss';

import { Link } from 'react-router-dom';

interface menuItemsInterface{
    item:string;
    anchor:string;
}

interface menuInterface{
    title: string;
    url: string;
    items: menuItemsInterface[];
}

export function Menu({ title, url, items }:menuInterface){
    return(
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <h4>
                    <Link to={'/'}>Healthy Food</Link>
                </h4>
            </div>

            <div className={styles.containerRight}>
                {items.map(item => (
                    <h4>{item.item}</h4>
                ))}
                    <div className={styles.buttonElement}>
                        <h4>
                            <Link to={url}>{title}</Link>
                        </h4>
                    </div>
            </div>
        </div>
    )
}