import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';

import bloco1 from '../../../assets/blog_image_1.svg';
import bloco2 from '../../../assets/bloco_image_2.svg';
import bloco3 from '../../../assets/bloco_image_3.svg';
import bloco4 from '../../../assets/bloco_image_4.svg';

import styles from './style.module.scss';
import { Card } from './Card';

interface CardProps{
    id:number;
    title:string;
    photo:string;
    name:string;
    author:string;
}

export function Blog(){
    const cards: CardProps[]=[
        {
            id:1,
            title: "Quick-start guide to nuts and seeds",
            photo: bloco1,
            name: "Kevin Ibrahim",
            author: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        },
        {
            id:2,
            title: "Nutrition: Tips for Improving Your Health",
            photo: bloco2,
            name: "Mike Jackson",
            author: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        },
        {
            id:3,
            title: "The top 10 benefits of eating healthy",
            photo: bloco3,
            name: "Bryan McGregor",
            author: "https://images.unsplash.com/photo-1560787313-5dff3307e257?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
        },
        {
            id:4,
            title: "What can be good for your health?",
            photo: bloco4,
            name: "Randy Watson",
            author: "https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
        },
    ]
    return(
        <>
        <div className={styles.container}>
        <div className={styles.containerTitle}>
            <h2 id="blog">Read Our Blog</h2>
            <p>
                Far far away, behind the world mountains, far from the countries
            </p>
            <p>    
                Vakalia and Consonantia, there live the blind texts.
            </p>
        </div>
        

        <div className={styles.carousel}>
            <Carousel
                plugins={[
            {
            resolve: slidesToShowPlugin,
            options: {
            numberOfSlides: 3,
            },
        },
        {
        resolve: arrowsPlugin,
        options: {
          arrowLeft: 
            <BsArrowLeftCircleFill className={styles.iconActiveLeft}/>
          ,
          arrowLeftDisabled:
            <BsArrowLeftCircleFill className={styles.iconInactive}/>
          ,
          arrowRight: 
            <BsArrowRightCircleFill className={styles.iconActiveRight} />
          ,
          arrowRightDisabled: 
            <p />
          ,
          addArrowClickHandler: true,
                }
        },
            ]}
            breakpoints={{
                425: {
                    plugins: [
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 1,
                            }
                        }
                    ]
                }
            }}
            >
                {cards.map(card =>( 
                   <Card id={card.id} author={card.author} name={card.name} photo={card.photo} title={card.title} /> 
                ))}
                </Carousel>
        </div>
        </div>
        </>
    )
}