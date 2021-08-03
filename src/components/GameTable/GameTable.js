import { useState, useEffect } from 'react';
import { drawCardsP1 } from '../../services/card-api';
import { drawCardsP2 } from '../../services/card-api';
import { drawCommonCards } from '../../services/card-api';
import P1Side from '../PlayerSide/P1Side';
import P2Side from '../PlayerSide/P2Side';
import PlayArea from '../PlayArea/PlayArea';
import ForNataliia from '../ForNataliia/ForNataliia'
// import Rules from '../Rules/Rules'
import styles from './GameTable.module.css';
import { css, StyleSheet } from "aphrodite"
import { fadeIn, slideInLeft } from 'react-animations'
import { Route, Switch, Link } from 'react-router-dom';

const GameTable = (props) => {

    const stylesb = StyleSheet.create({
        Invis: {
            display: 'none'
        },
        NewDealVis: {
            animationName: fadeIn,
            animationDuration: '1s',
            fontSize: '3em',
            position: 'absolute',
            left: '0',
            right: '0',
            top: '45%',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'auto',
            zIndex: '2'
        },
        PWinsVis: {
            display: 'auto',
            position: 'absolute',
            top: '0',
            left: '0',
            marginLeft: 'auto',
            marginRight: 'auto',
            zIndex: '2',
            size: '10em'
        },
        StartBtnVis: {
            display: 'flex',
            flexDirection: 'column',
            width: '9em',
            alignItems: 'center',
            position: 'absolute',
            top: '12em',
            right: '0',
            left: '0',
            marginLeft: 'auto',
            marginRight: 'auto'

        },
        ExitGame: {
            animationName: slideInLeft,
            animationDuration: '1s',
            display: 'auto',
            position: 'absolute',
            left: '30px',
            bottom: '20px',
            // marginLeft: '50px',
            // marginBottom: 'auto'
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

    const exitGame = () => {
        setGameOn(false)
        setP1Hand([])
        setP2Hand([])
        setCommonCards([])
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
            <div className={styles.titleDiv}>
                <ForNataliia 
                    gameOn={gameOn}
                />
            </div>
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
            <div className={css([stylesb.Invis, gameOn === false && stylesb.StartBtnVis])}>
                <button
                    className={styles.startbtn}
                    onClick={() => newGameDeal()}
                >Start Game
                </button>
                <Link className={styles.rulesbtn} to='/rules'>Rules/Instructions</Link>
            </div>
            <button
                className={css([stylesb.Invis, gameOn === true && stylesb.ExitGame])}
                onClick={() => exitGame()}
            >Exit Game
            </button>
            <p className={css([stylesb.Invis, betweenRounds === true && stylesb.NewDealVis])}>New Round Deal</p>
            <p className={css([stylesb.Invis, p1Wins === true && stylesb.PWinsVis])}>PLAYER 1 WINS!!</p>
            <p className={css([stylesb.Invis, p2Wins === true && stylesb.PWinsVis])}>PLAYER 2 WINS!!</p>
        </div>
    )
}

export default GameTable;