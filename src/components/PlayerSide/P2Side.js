import P2Hand from '../PlayerHand/P2Hand'
import styles from './PlayerSide.module.css'

const P2Side = (props) => {
    return(
        <div className={styles.P2Side}>
            <P2Hand
                deckData={props.deckData}
                setDeckData={props.setDeckData}
                p2Hand={props.p2Hand}
                setP2Hand={props.setP2Hand}
                p2Tally={props.p2Tally}
                setP2Tally={props.setP2Tally}
                turn={props.turn}
                setTurn={props.setTurn}
            />
        </div>
    )
}

export default P2Side;