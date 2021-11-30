import { FiSearch } from 'react-icons/fi'

import {Menu} from '../../../components/Menu';

import styles from './style.module.scss';

export function TopPage(){
    return(
        <>
        <div className={styles.container}>
            < Menu title="REGISTER" url={'/registerpage'} key='1' />

            <div className={styles.containerSearch}>
            <div className={styles.containerSubmit}>
                <h2>Ready for Trying a new recipe?</h2>
                <div className={styles.searchContainer}>
                    <input type="text" placeholder="Search healthy recipes"/>

                    <div className={styles.buttonSearch}>
                        <FiSearch />
                    </div>
                </div>
            </div>
                    
        </div>
        </div>
        </>
    )
}