import { Button } from '../../../components/Button';

import styles from './style.module.scss';

export function Services(){
    return(
        <>
        <div className={styles.container}>
            <div className={styles.containerButton}>
                <div className={styles.containerText}>
            <h4>The best services ready</h4>
            <h4>To serve you</h4>

            <p>
                Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the 
                blind texts.
            </p>

            <p>
                Separated they live in Bookmarksgrove right at the 
                coast of the Semantics, a large language ocean.
            </p>

            <p>
                A small river named Duden flows by their place and
                supplies it with the necessary regelialia.
            </p>
                </div>

                <Button text={"Know More"}/>
            </div>
        </div>
        </>
    )
}