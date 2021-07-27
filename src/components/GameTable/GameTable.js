import { useState, useRef, useEffect } from 'react';
import { drawCardsP1 } from '../../services/card-api';
import { drawCardsP2 } from '../../services/card-api';
import { drawCommonCards } from '../../services/card-api';
import P1Side from '../PlayerSide/P1Side';
import P2Side from '../PlayerSide/P2Side';
import PlayArea from '../PlayArea/PlayArea';
import styles from './GameTable.module.css';

const GameTable = (props) => {

    const [ p1Hand, setP1Hand ] = useState([]);
    const [ p2Hand, setP2Hand ] = useState([]);
    const [commonCards, setCommonCards] = useState([]);
    const [ p1Tally, setP1Tally ] = useState({pCardValue: {}, cCardValue: []})
    const [ p2Tally, setP2Tally ] = useState({pCardValue: {}, cCardValue: []})
    const [ turn, setTurn ] = useState(true)

    // function that creates arrays for p1 hand, p2 hand, and common cards.
    // Also sets remaining cards of game deck state to -10
    async function newGameDeal() {
        const p1Data = await drawCardsP1(props.deckData.deck_id)
        const p2Data = await drawCardsP2(props.deckData.deck_id)
        const commonData = await drawCommonCards(props.deckData.deck_id)
        setP1Hand(p1Data.cards)
        setP2Hand(p2Data.cards)
        setCommonCards(commonData.cards)
        props.setDeckData((prevState) => ({
            ...prevState,
            remaining: 30
        }))
    }

    // Value Equals Start
    // Value Equals Start
    // Value Equals Start
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

    // Value Equals End
    // Value Equals End
    // Value Equals End

    return (
        <div className={styles.GameTable}>
            <P1Side
                deckData={props.deckData}
                setDeckData={props.setDeckData}
                p1Hand={p1Hand}
                p2Hand={p2Hand}
                setP1Hand={setP1Hand}
                setP2Hand={setP2Hand}
                p1Tally={p1Tally}
                setP1Tally={setP1Tally}
                turn={turn}
                setTurn={setTurn}
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
                p2Tally={p2Tally}
                setP2Tally={setP2Tally}
                turn={turn}
                setTurn={setTurn}
            />
            <button
                className={styles.startbtn}
                onClick={() => newGameDeal()}
            >Start Game
            </button>
        </div>
    )
}

export default GameTable;