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

    return (
        <div className={styles.GameTable}>
            <P1Side
                deckData={props.deckData}
                setDeckData={props.setDeckData}
                p1Hand={p1Hand}
                p2Hand={p2Hand}
                setP1Hand={setP1Hand}
                setP2Hand={setP2Hand}
            />
            {/* div container used to alter behavior of middle cards/play area */}
            <div className={styles.commonCardContainer}>
                <PlayArea
                    commonCards={commonCards}
                    setCommonCards={setCommonCards}
                />
            </div>
            <P2Side
                deckData={props.deckData}
                setDeckData={props.setDeckData}
                p1Hand={p1Hand}
                p2Hand={p2Hand}
                setP1Hand={setP1Hand}
                setP2Hand={setP2Hand}
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