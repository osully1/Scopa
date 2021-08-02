import P1Hand from '../PlayerHand/P1Hand'
import P1PlayButtons from '../PlayButtons/P1PlayButtons'
import styles from './PlayerSide.module.css'
import { slideInLeft } from 'react-animations'
import { css, StyleSheet } from "aphrodite"

const P1Side = (props) => {

    const stylesb = StyleSheet.create({
        ScoreInactive: {
            animationName: slideInLeft,
            animationDuration: '1s',
            display: 'none'
        },
        ScoreActive: {
            animationName: slideInLeft,
            animationDuration: '1s',
            position: 'absolute',
            top: '4em',
            left: '2em',
            display: 'auto'
        },
        ScoreWon: {
            animationName: slideInLeft,
            animationDuration: '1s',
            position: 'absolute',
            top: '4em',
            left: '2em',
            display: 'auto',
            color: 'green'
            
            
        }
    })

    return(
        <>
            <p className={css([stylesb.ScoreInactive, props.gameOn === true && stylesb.ScoreActive, props.gameOn === true && props.p1Wins === true && stylesb.ScoreWon])}>Player 1: {props.p1Score}</p>
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
                deckData={props.deckData}
                setDeckData={props.setDeckData}
                p1Hand={props.p1Hand}
                setP1Hand={props.setP1Hand}
                p2Hand={props.p2Hand}
                setP2Hand={props.setP2Hand}
                commonCards={props.commonCards}
                setCommonCards={props.setCommonCards}
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
                gameOn={props.gameOn}
                setGameOn={props.setGameOn}
                p1Score={props.p1Score}
                setP1Score={props.setP1Score}
                p2Score={props.p2Score}
                setP2Score={props.setP2Score}
                betweenRounds={props.betweenRounds}
                setBetweenRounds={props.setBetweenRounds}
                p1Wins={props.p1Wins}
                setP1Wins={props.setP1Wins}
                p2Wins={props.p2Wins}
                setP2Wins={props.setP2Wins}
            />
        </>
    )
}

export default P1Side;