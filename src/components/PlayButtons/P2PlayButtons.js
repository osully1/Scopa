import styles from './PlayButtons.module.css'
import { css, StyleSheet } from "aphrodite"
import { slideInRight } from 'react-animations'
import { newGameDeck } from '../../services/card-api'
import { drawCardsP1 } from '../../services/card-api';
import { drawCardsP2 } from '../../services/card-api';
import { drawCommonCards } from '../../services/card-api';

const P2PlayButtons = (props) => {

    // Styles below control whether buttons are active or inactive depending on cards selected, or whether buttons display or not depending on whether a game is happening
    const stylesb = StyleSheet.create({
        PlayInactive: {
            animationName: slideInRight,
            animationDuration: '1s',
            marginBottom: '10px',
            pointerEvents: 'none',
            opacity: '0.65'
        },
        PlayActive: {
            animationName: slideInRight,
            animationDuration: '1s',
            marginBottom: '10px',
            pointerEvents: 'auto',
            opacity: '1'
        },
        PlayInvis: {
            display: 'none'
        },
        DiscInactive: {
            animationName: slideInRight,
            animationDuration: '1s',
            pointerEvents: 'none',
            opacity: '0.65'
        },
        DiscActive: {
            animationName: slideInRight,
            animationDuration: '1s',
            pointerEvents: 'auto',
            opacity: '1'
        },
        DiscInvis: {
            display: 'none'
        }
    })

    // function that runs when players have no cards and deck is dry
    async function newRoundDeal() {
        const data = await newGameDeck()
        const p1Data = await drawCardsP1(data.deck_id)
        const p2Data = await drawCardsP2(data.deck_id)
        const commonData = await drawCommonCards(data.deck_id)
        props.setDeckData(data)
        props.setBetweenRounds(true)
        setTimeout(() => {
            props.setP1Hand(p1Data.cards)
        }, 1000)
        setTimeout(() => {
            props.setP2Hand(p2Data.cards)
        }, 2000)
        setTimeout(() => {
            props.setCommonCards(commonData.cards)
            props.setDeckData((prevState) => ({
                ...prevState,
                remaining: 30
            }))
            props.setP1Pile([])
            props.setP2Pile([])
        }, 3000)
        setTimeout(() => {
            props.setBetweenRounds(false)
        }, 4000)
    }

    // These two functions deal 3 cards to each players and reduces deckData.remaining by 6
    async function newDeal1() {
        props.setP1Hand([])
        const p1Data = await drawCardsP1(props.deckData.deck_id)
        props.setP1Hand(p1Data.cards)
    }
    async function newDeal2() {
        props.setP2Hand([])
        const p2Data = await drawCardsP2(props.deckData.deck_id)
        props.setP2Hand(p2Data.cards)
        props.setDeckData((prevState) => ({
            ...prevState,
            remaining: props.deckData.remaining -= 6
        }))
    }

    // Runs when players have no more cards. Deals new cards
    const newSubRound = () => {
        setTimeout(() => {
            newDeal1()   
        }, 800)

        setTimeout(() => {
            newDeal2()   
        }, 1600)
    }

    // Runs when players have no more cards and deck is dry. Deals new cards and sets scores
    const newRound = () => {

        // Ensures that the player who went second last round now goes first
        props.setTurn(!props.turn)

        // Sends remaining common cards to whoever took cards last
        if (props.cardsToP1 === true) {
            props.setP1Pile((prevState) => ([
                ...prevState,
                ...props.commonCards
            ]))
        } else if (props.cardsToP1 === true) {
            props.setP2Pile((prevState) => ([
                ...prevState,
                ...props.commonCards
            ]))
        }

        let thisRoundScore1 = props.p1Score
        let thisRoundScore2 = props.p2Score

        // CARDS POINT SECTION
        if (props.p1Pile.length > props.p2Pile.length) {
            thisRoundScore1++
        } else if (props.p2Pile.length > props.p1Pile.length) {
            thisRoundScore2++
        }
        // CARDS POINT SECTION

        // DIAMONDS POINT SECTION
        let diamondCount1 = 0
        let diamondCount2 = 0
        for (i = 0; i < props.p1Pile.length; ++i) {
            if (props.p1Pile[i].suit === "DIAMONDS") {
            diamondCount1++
            }
        }
        for (i = 0; i < props.p2Pile.length; ++i) {
            if (props.p2Pile[i].suit === "DIAMONDS") {
            diamondCount2++
            }
        }
        if (diamondCount1 > diamondCount2) {
            thisRoundScore1++
        } else if (diamondCount2 > diamondCount1) {
            thisRoundScore2++
        }
        // DIAMONDS POINT SECTION

        // SEVENS POINT SECTION
        let sevensCount1 = 0
        let sevensCount2 = 0
        for (i = 0; i < props.p1Pile.length; ++i) {
            if (props.p1Pile[i].value === 7) {
            sevensCount1++
            }
        }
        for (var i = 0; i < props.p2Pile.length; ++i) {
            if (props.p2Pile[i].value === 7) {
            sevensCount2++
            }
        }
        if (sevensCount1 > sevensCount2) {
            thisRoundScore1++
        } else if (sevensCount2 > sevensCount1) {
            thisRoundScore2++
        }
        // SEVENS POINT SECTION

        // SEVEN OF DIAMONDS POINT SECTION
        props.p1Pile.map((card) => {
            if (card.code === '7D') {
                thisRoundScore1++
            }
        })
        props.p2Pile.map((card) => {
            if (card.code === '7D') {
                thisRoundScore2++
            }
        })
        // SEVEN OF DIAMONDS POINT SECTION

        // TALLY EM UP SECTION
        props.setP1Score(thisRoundScore1)
        props.setP2Score(thisRoundScore2)
        // sevensCount1 = 0
        // sevensCount2 = 0
        // diamondCount1 = 0
        // diamondCount2 = 0
        // thisRoundScore1 = 0
        // thisRoundScore2 = 0
        // TALLY EM UP SECTION
        
        // Checks if game is over. If not, runs newRoundDeal(). If so, runs gameOver()
        if (props.p1Score > 10 || props.p2Score > 10) {
            gameOver()
        } else {
            newRoundDeal()
        }
    }

    const gameOver = () => {
        if (props.p1Score > props.p2Score) {
            props.setP1Wins(true)
        } else if (props.p1Score < props.p2Score) {
            props.setP2Score(true)
        } else if (props.p1Score === props.p2Score) {
            newRoundDeal()
        }
    }

    const playButtonFunction = () => {

        // Switches which player remaining cards go to if this is the last play of the round
        props.setCardsToP1(false)

        // Switches turns
        props.setTurn(true)

        // Creates an array of the p2's new hand after discarding p2Tally.pCardValue card. Will check if this array is empty to determine if the round is over
        let newHand = []
        props.p2Hand.forEach((card) => {
            if (card.code !== props.p2Tally.pCardValue.code) {
                newHand.push(card)
            }
        })
        props.setP2Hand(newHand)

        // Creates "commonCardArray" which is the new common cards after p2 takes some
        const commonCardArray = []
        const commonTallyArray = props.p2Tally.cCardValue.map((card) => {
            return card.code
        })
        props.commonCards.map((card) => {
            if(commonTallyArray.indexOf(card.code) === -1) {
                commonCardArray.push(card)
            }
        })
        props.setCommonCards(commonCardArray)

        // Moves all p2Tally cards into p2's score pile
        props.setP2Pile((prevState) => ([
            ...prevState,
            ...props.p2Tally.cCardValue,
            props.p2Tally.pCardValue
        ]))

        // Resets P2Tally so no cards are selected
        props.setP2Tally({pCardValue: {}, cCardValue: []})

        // Checks if subround is over and new cards need to be dealt, then deals new cards if needbe.
        if (
            newHand.length === 0
            && props.p1Hand.length === 0
            && props.deckData.remaining > 0
        ) {
            newSubRound()
        }

        // Checks if whole round is over and runs newRound function to tally cards, shuffle, and deal new cards
        if (
            newHand.length === 0
            && props.p1Hand.length === 0
            && props.deckData.remaining === 0
        ) {
            newRound()
        }
    }

    const discardButtonFunction = () => {

        // Switches turns
        props.setTurn(true)

        // Creates an array of the p1's new hand after discarding pCardValue card. Later, will check if this array is empty to determine if the round is over
        let newHand = []
        props.p2Hand.forEach((card) => {
            if (card.code !== props.p2Tally.pCardValue.code) {
                newHand.push(card)
            }
        })
        props.setP2Hand(newHand)

        // Puts selected player card into the common cards
        props.setCommonCards((prevState) => ([
            ...prevState, props.p2Tally.pCardValue
        ]))

        // Resets P1Tally so no cards are selected
        props.setP2Tally({pCardValue: {}, cCardValue: []})

        // Checks if subround is over and new cards need to be dealt, then deals new cards if needbe.
        if (
            newHand.length === 0
            && props.p1Hand.length === 0
            && props.deckData.remaining > 0
        ) {
            newSubRound()
        }

        // Checks if whole round is over and runs newRound function to tally cards, shuffle, and deal new cards
        if (
            newHand.length === 0
            && props.p1Hand.length === 0
            && props.deckData.remaining === 0
        ) {
            newRound()
        }
    }

    return(
        <div className={styles.p2btns}>
            <button 
                // className will change play button to active when value of player card matches the sum of values of selected common cards
                className={css([stylesb.PlayInactive, props.gameOn === false && stylesb.PlayInvis, props.p2Tally.pCardValue.value === props.p2Tally.cCardValue.map(x => x.value).reduce((a, b) => a + b, 0) && stylesb.PlayActive])}
                onClick={() => playButtonFunction()}
            >Play Card</button>
            <button
                className={css([stylesb.DiscInactive, props.gameOn === false && stylesb.DiscInvis, Object.keys(props.p2Tally.pCardValue).length && props.p2Tally.cCardValue.length < 1 && stylesb.DiscActive])}
                onClick={() => discardButtonFunction()}
            >Discard</button>
        </div>
    )
}

export default P2PlayButtons