import P2Hand from '../PlayerHand/P2Hand'
import P2PlayButtons from '../PlayButtons/P2PlayButtons'
import styles from './PlayerSide.module.css'

const P2Side = (props) => {
    return(
        <>
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
            <P2PlayButtons
                deckData={props.deckData}
                setDeckData={props.setDeckData}
                p1Hand={props.p1Hand}
                setP1Hand={props.setP1Hand}
                p2Hand={props.p2Hand}
                setP2Hand={props.setP2Hand}
                commonCards={props.commonCards}
                setCommonCards={props.setCommonCards}
                p2Tally={props.p2Tally}
                setP2Tally={props.setP2Tally}
                turn={props.turn}
                setTurn={props.setTurn}
                cardsToP1={props.cardsToP1}
                setCardsToP1={props.setCardsToP1}
                p1Pile={props.p1Pile}
                p2Pile={props.p2Pile}
                setP1Pile={props.setP1Pile}
                setP2Pile={props.setP2Pile}
                gameOn={props.gameOn}
                setGameOn={props.setGameOn}
            />
        </>
    )
}

export default P2Side;