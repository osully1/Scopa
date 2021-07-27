import P1Hand from '../PlayerHand/P1Hand'
import styles from './PlayerSide.module.css'

const P1Side = (props) => {
    return(
        <div className={styles.P1Side}>
            <P1Hand
                deckData={props.deckData}
                setDeckData={props.setDeckData}
                p1Hand={props.p1Hand}
                setP1Hand={props.setP1Hand}
                p1Tally={props.p1Tally}
                setP1Tally={props.setP1Tally}
                turn={props.turn}
                setTurn={props.setTurn}
            />
        </div>
    )
}

export default P1Side;