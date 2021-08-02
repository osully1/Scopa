import { useState, useEffect } from 'react';
import { drawCardsP1 } from '../../services/card-api';
import { drawCardsP2 } from '../../services/card-api';
import { drawCommonCards } from '../../services/card-api';
import P1Side from '../PlayerSide/P1Side';
import P2Side from '../PlayerSide/P2Side';
import PlayArea from '../PlayArea/PlayArea';
import ForNataliia from '../ForNataliia/ForNataliia'
import styles from './GameTable.module.css';
import { css, StyleSheet } from "aphrodite"
import { fadeIn } from 'react-animations'

const GameTable = (props) => {

    const stylesb = StyleSheet.create({
        NewDealInvis: {
            animationName: fadeIn,
            animationDuration: '1s',
            position: 'absolute',
            left: '50%',
            top: '50%',
            display: 'none'
        },
        NewDealVis: {
            animationName: fadeIn,
            animationDuration: '1s',
            position: 'absolute',
            left: '50%',
            top: '50%',
            display: 'auto',
            zIndex: '2'
        },
        PWinsInvis: {
            display: 'none'
        },
        PWinsVis: {
            display: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: '2',
            size: '10em'
        }
    })

    const [ p1Hand, setP1Hand ] = useState([]);
    const [ p2Hand, setP2Hand ] = useState([]);
    const [commonCards, setCommonCards] = useState([]);
    const [ p1Tally, setP1Tally ] = useState({pCardValue: {}, cCardValue: []})
    const [ p2Tally, setP2Tally ] = useState({pCardValue: {}, cCardValue: []})
    const [ p1Pile, setP1Pile ] = useState([])
    const [ p2Pile, setP2Pile ] = useState([])
    const [ turn, setTurn ] = useState(true)
    const [ cardsToP1, setCardsToP1 ] = useState(true)
    const [ gameOn, setGameOn ] = useState(false)
    const [ p1Score, setP1Score ] = useState(0)
    const [ p2Score, setP2Score ] = useState(0)
    const [ betweenRounds, setBetweenRounds ] = useState(false)
    const [ p1Wins, setP1Wins ] = useState(false)
    const [ p2Wins, setP2Wins ] = useState(false)

    // function that creates arrays for p1 hand, p2 hand, and common cards.
    // Also sets remaining cards of game deck state to -10
    async function newGameDeal() {
        setP1Wins(false)
        setP2Wins(false)
        setP1Score(0)
        setP1Score(0)
        setP1Hand([])
        setP2Hand([])
        setCommonCards([])
        const p1Data = await drawCardsP1(props.deckData.deck_id)
        const p2Data = await drawCardsP2(props.deckData.deck_id)
        const commonData = await drawCommonCards(props.deckData.deck_id)
        setGameOn(true)
        setP1Hand(p1Data.cards)
        setP2Hand(p2Data.cards)
        setCommonCards(commonData.cards)
        props.setDeckData((prevState) => ({
            ...prevState,
            remaining: 30
        }))
    }

    // Value Equals Start ////////////////
    // Value Equals Start ////////////////
    // Value Equals Start ////////////////
    // The following section changes all card value strings into integers

    const tallyEquals1 = () => {
        const p1Array = [...p1Hand]
        if (p1Hand.length) {
            return(
                p1Array.map((card, idx) => {
                    if (card.value === 'KING') {
                        card.value = parseInt(card.value.replace('KING', '10'))
                    } else if (card.value === 'JACK') {
                        card.value = parseInt(card.value.replace('JACK', '9'))
                    } else if (card.value === 'QUEEN') {
                        card.value = parseInt(card.value.replace('QUEEN', '8'))
                    } else if (card.value === 'ACE') {
                        card.value = parseInt(card.value.replace('ACE', '1'))
                    } else {
                        card.value = parseInt(card.value)
                    }
                    return(p1Array)
                })
            )
        } else {
            return [0]
        }
    }

    const tallyEquals2 = () => {
        const p2Array = [...p2Hand]
        if (p2Hand.length) {
            return(
                p2Array.map((card, idx) => {
                    if (card.value === 'KING') {
                        card.value = parseInt(card.value.replace('KING', '10'))
                    } else if (card.value === 'JACK') {
                        card.value = parseInt(card.value.replace('JACK', '9'))
                    } else if (card.value === 'QUEEN') {
                        card.value = parseInt(card.value.replace('QUEEN', '8'))
                    } else if (card.value === 'ACE') {
                        card.value = parseInt(card.value.replace('ACE', '1'))
                    } else {
                        card.value = parseInt(card.value)
                    }
                    return(p2Array)
                })
            )
        } else {
            return [0]
        }
    }

    const tallyEqualsc = () => {
        const cArray = [...commonCards]
        if (commonCards.length) {
            return(
                cArray.map((card, idx) => {
                    if (card.value === 'KING') {
                        card.value = parseInt(card.value.replace('KING', '10'))
                    } else if (card.value === 'JACK') {
                        card.value = parseInt(card.value.replace('JACK', '9'))
                    } else if (card.value === 'QUEEN') {
                        card.value = parseInt(card.value.replace('QUEEN', '8'))
                    } else if (card.value === 'ACE') {
                        card.value = parseInt(card.value.replace('ACE', '1'))
                    } else {
                        card.value = parseInt(card.value)
                    }
                    return(cArray)
                })
            )
        } else {
            return [0]
        }
    }
    

    useEffect(() => {
        tallyEquals1()
    }, [p1Hand])

    useEffect(() => {
        tallyEquals2()
    }, [p2Hand])

    useEffect(() => {
        tallyEqualsc()
    }, [commonCards])

    // Value Equals End ////////////////
    // Value Equals End ////////////////
    // Value Equals End ////////////////

    return (
        <div className={styles.GameTable}>
            <ForNataliia 
                gameOn={gameOn}
            />
            <P1Side
                deckData={props.deckData}
                setDeckData={props.setDeckData}
                p1Hand={p1Hand}
                p2Hand={p2Hand}
                setP1Hand={setP1Hand}
                setP2Hand={setP2Hand}
                commonCards={commonCards}
                setCommonCards={setCommonCards}
                p1Tally={p1Tally}
                setP1Tally={setP1Tally}
                turn={turn}
                setTurn={setTurn}
                cardsToP1={cardsToP1}
                setCardsToP1={setCardsToP1}
                p1Pile={p1Pile}
                p2Pile={p2Pile}
                setP1Pile={setP1Pile}
                setP2Pile={setP2Pile}
                gameOn={gameOn}
                setGameOn={setGameOn}
                p1Score={p1Score}
                setP1Score={setP1Score}
                p2Score={p2Score}
                setP2Score={setP2Score}
                betweenRounds={betweenRounds}
                setBetweenRounds={setBetweenRounds}
                p1Wins={p1Wins}
                setP1Wins={setP1Wins}
                p2Wins={p2Wins}
                setP2Wins={setP2Wins}
            />
            {/* div container used to alter behavior of middle cards/play area */}
            <div className={styles.commonCardContainer}>
                <PlayArea
                    commonCards={commonCards}
                    setCommonCards={setCommonCards}
                    p1Tally={p1Tally}
                    p2Tally={p2Tally}
                    setP1Tally={setP1Tally}
                    setP2Tally={setP2Tally}
                    turn={turn}
                    setTurn={setTurn}
                />
            </div>
            <P2Side
                deckData={props.deckData}
                setDeckData={props.setDeckData}
                p1Hand={p1Hand}
                p2Hand={p2Hand}
                setP1Hand={setP1Hand}
                setP2Hand={setP2Hand}
                commonCards={commonCards}
                setCommonCards={setCommonCards}
                p2Tally={p2Tally}
                setP2Tally={setP2Tally}
                turn={turn}
                setTurn={setTurn}
                cardsToP1={cardsToP1}
                setCardsToP1={setCardsToP1}
                p1Pile={p1Pile}
                p2Pile={p2Pile}
                setP1Pile={setP1Pile}
                setP2Pile={setP2Pile}
                gameOn={gameOn}
                setGameOn={setGameOn}
                p1Score={p1Score}
                setP1Score={setP1Score}
                p2Score={p2Score}
                setP2Score={setP2Score}
                betweenRounds={betweenRounds}
                setBetweenRounds={setBetweenRounds}
                p1Wins={p1Wins}
                setP1Wins={setP1Wins}
                p2Wins={p2Wins}
                setP2Wins={setP2Wins}
            />
            <button
                className={styles.startbtn}
                onClick={() => newGameDeal()}
            >Start Game
            </button>
            <p className={css([stylesb.NewDealInvis, betweenRounds === true && stylesb.NewDealVis])}>New Deal</p>
            <p className={css([stylesb.PWinsInvis, p1Wins === true && stylesb.PWinsVis])}>PLAYER 1 WINS!!</p>
            <p className={css([stylesb.PWinsInvis, p2Wins === true && stylesb.PWinsVis])}>PLAYER 2 WINS!!</p>
        </div>
    )
}

export default GameTable;