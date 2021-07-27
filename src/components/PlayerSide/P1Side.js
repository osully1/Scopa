import P1Hand from '../PlayerHand/P1Hand'
import styles from './PlayerSide.module.css'

const P1Side = (props) => {
    return(
        <div className={styles.P1Side}>
            <P1Hand
                deckData={props.deckData}
                setDeckData={props.setDeckData}
                p1Hand={props.p1Hand}
                p2Hand={props.p2Hand}
                setP1Hand={props.setP1Hand}
                setP2Hand={props.setP2Hand}
            />
        </div>
    )
}

export default P1Side;