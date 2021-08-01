import styles from './PlayButtons.module.css'
import { css, StyleSheet } from "aphrodite"
import { slideInRight, bounce } from 'react-animations'
import { drawCardsP1 } from '../../services/card-api';
import { drawCardsP2 } from '../../services/card-api';
import { drawCommonCards } from '../../services/card-api';

const P1PlayButtons = (props) => {

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

    async function newDeal1() {
        const p1Data = await drawCardsP1(props.deckData.deck_id)
        props.setP1Hand(p1Data)
    }

    // WARNING!!! MUST REMEMBER THAT SETTING REMAINING STATE IS ASYNCHRONOUS!!! THAT WILL BITE YOU IN THE BUTT WHEN YOU HAVE TO CHECK WHETHER OR NOT THE ROUND IS OVER TO SHUFFLE AND RE-DEAL ALL CARDS!!!!
    async function newDeal2() {
        const p2Data = await drawCardsP2(props.deckData.deck_id)
        props.setP2Hand(p2Data)
        props.setDeckData((prevState) => ({
            ...prevState,
            remaining: props.deckData.remaining -= 6
        }))
    }

    const playButtonFunction = () => {

        // Switches which player remaining cards go to if this is the last play of the round
        props.setCardsToP1(true)

        // Switches turns
        props.setTurn(false)

        // Creates an array of the p1's new hand after discarding p1Tally.pCardValue card. Will check if this array is empty to determine if the round is over
        let newHand = []
        props.p1Hand.forEach((card) => {
            if (card.code !== props.p1Tally.pCardValue.code) {
                newHand.push(card)
            }
        })
        props.setP1Hand(newHand)

        // Creates "commonCardArray" which is the new common cards after p1 takes some
        const commonCardArray = []
        const commonTallyArray = props.p1Tally.cCardValue.map((card) => {
            return card.code
        })
        props.commonCards.map((card) => {
            if(commonTallyArray.indexOf(card.code) === -1) {
                commonCardArray.push(card)
            }
        })
        props.setCommonCards(commonCardArray)

        // Moves all p1Tally cards into p1's score pile
        props.setP1Pile((prevState) => ([
            ...prevState,
            ...props.p1Tally.cCardValue,
            props.p1Tally.pCardValue
        ]))

        // Resets P1Tally so no cards are selected
        props.setP1Tally({pCardValue: {}, cCardValue: []})

        // Checks if subround is over and new cards need to be dealt, then deals new cards if needbe.
        if (
            newHand.length === 0
            && props.p2Hand.length === 0
            && props.deckData.remaining > 0
        ) {
            setTimeout(() => {
                newDeal1()   
            }, 800)

            setTimeout(() => {
                newDeal2()   
            }, 1600)
        }

        // Need to finish this function. Need to keep in mind that setting state is asynchronous and I must use variables for immediate actions and then set state later in the same button click
    }

    return(
        <div className={styles.p1btns}>
            <button 
                // className will change play button to active when value of player card matches the sum of values of selected common cards
                className={css([stylesb.PlayInactive, props.gameOn === false && stylesb.PlayInvis, props.p1Tally.pCardValue.value === props.p1Tally.cCardValue.map(x => x.value).reduce((a, b) => a + b, 0) && stylesb.PlayActive])}
                onClick={() => playButtonFunction()}
            >Play Card</button>
            <button
                className={css([stylesb.DiscInactive, props.gameOn === false && stylesb.DiscInvis, Object.keys(props.p1Tally.pCardValue).length && props.p1Tally.cCardValue.length < 1 && stylesb.DiscActive])}
            >Discard</button>
        </div>
    )
}

export default P1PlayButtons