import styles from './style.module.scss';

export function FooterText(){
    const date = new Date();

    return(
        <div className={styles.container}>

            <p className={styles.copyrightsContainer}>
                © Copyrights {date.getFullYear()} Stack. All Rights Reserved.
            </p>

            <p className={styles.privacyContainer}>
                Privacy Policy 
                <span>
                    Terms and Conditions
                </span>
            </p>
        </div>
    )
}