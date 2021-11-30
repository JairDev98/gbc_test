import { Button } from '../Button';
import { FooterText } from './FooterText';

import styles from './style.module.scss';

export function Footer(){
    return(
        <>
        <div className={styles.container}>

            <div className={styles.containerSearch}>
            <div className={styles.containerSubmit}>
                <h2>Join our membership to get special offer</h2>
                <div className={styles.searchContainer}>
                    <input type="text" placeholder="Enter your email addres"/>
                    
                </div>
                
            </div>
            <Button text="Join" />
        </div>
        </div>
        <FooterText />
        </>
    )
}