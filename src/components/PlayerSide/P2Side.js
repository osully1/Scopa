import P2Hand from '../PlayerHand/P2Hand'
import styles from './PlayerSide.module.css'

const P2Side = (props) => {
    return(
        <div className={styles.P2Side}>
            <P2Hand
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

export default P2Side;