import P1Hand from '../PlayerHand/P1Hand'
import P1PlayButtons from '../PlayButtons/P1PlayButtons'
import styles from './PlayerSide.module.css'

const P1Side = (props) => {
    return(
        <>
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
            <P1PlayButtons
                p1Hand={props.p1Hand}
                setP1Hand={props.setP1Hand}
                p1Tally={props.p1Tally}
                setP1Tally={props.setP1Tally}
                turn={props.turn}
                setTurn={props.setTurn}
                cardsToP1={props.cardsToP1}
                setCardsToP1={props.setCardsToP1}
                p1Pile={props.p1Pile}
                p2Pile={props.p2Pile}
                setP1Pile={props.setP1Pile}
                setP2Pile={props.setP2Pile}
            />
        </>
    )
}

export default P1Side;