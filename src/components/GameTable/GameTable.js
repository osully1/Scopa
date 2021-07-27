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

    async function newGameDeal() {
        const p1Data = await drawCardsP1(props.deckData.deck_id)
        const p2Data = await drawCardsP2(props.deckData.deck_id)
        const commonData = await drawCommonCards(props.deckData.deck_id)
    }

    return (
        <div className={styles.GameTable}>
            <P1Side />
            <PlayArea />
            <P2Side />
            <button
                className={styles.startbtn}
                onClick={() => newGameDeal()}
            >Start Game
            </button>
        </div>
    )
}

export default GameTable;