import digitalserv from '../../assets/serviceFotos/digital.jpeg'
import press from '../../assets/serviceFotos/pressarbeit.png'
import marktingserv from '../../assets/serviceFotos/markitingService.jpeg'
import eventf from '../../assets/serviceFotos/event-mangment-service.jpeg'
import styles from './styling/Digitalservice.module.css'


export default function Digitalservice() {

    /** die bildOne bis bildTwo in ein Object umwandeln */
    const bildOne = {
        backgroundImage: `url(${digitalserv})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
    const bildTwo = {
        backgroundImage: `url(${press})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
    const bildThree = {
        backgroundImage: `url(${marktingserv})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
    const bildFour = {
        backgroundImage: `url(${eventf})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }


    /** return nach dem gleichen Konzept wie bei ClientService umbauen - mit .map function */
    return (

        <section id={styles.digitalService} >

            <div className={styles.fotoItem} style={bildOne}>
                <a href="//">

                </a>
            </div>

            <div className={styles.fotoItem} style={bildTwo} >
                <a href="//"> </a>
            </div>

            <div className={styles.fotoItem} style={bildThree}>
                <a href="//"> </a>
            </div>

            <div className={styles.fotoItem} style={bildFour}>
                <a href='//'>
                </a>
            </div>



        </section>




    )

}