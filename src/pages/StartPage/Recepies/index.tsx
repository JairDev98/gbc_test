import comida1 from '../../../assets/comida_1.svg';
import comida2 from '../../../assets/comida_2.svg';
import comida3 from '../../../assets/comida_3.svg';
import comida4 from '../../../assets/comida_4.svg';

import { Card } from './Card';

import styles from './style.module.scss';

interface CardProps {
    id:number;
    title:string;
    photo:string;
}

export function Recepies(){
    const cards: CardProps[]=[
        {
         id:1,
         title: "Broccoli Salad whith Bacon",
         photo: comida1
        },
        {
         id:2,
         title: "Classic Beef Burgers",
         photo: comida2
        },
        {
         id:3,
         title: "Classic Potato Salad",
         photo: comida3
        },
        {
         id:4,
         title: "Cherry Cobbler on the Grill",
         photo: comida4
        },
    ]

   return(
    <div className={styles.container}>
        <div className={styles.containerTitle}>
            <h2>Our Best Recipes</h2>
            <p>
                Far far away, behind the world mountains, far from the countries
                Vakalia and Consonantia, there live the blind texts.
            </p>
        </div>

        <div className={styles.containerCard}>

            {cards.map(card =>(
                <Card id={card.id} photo={card.photo} title={card.title} />
            ))}
        </div>
</div>
   )
}