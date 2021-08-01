import styles from './PlayButtons.module.css'
import { css, StyleSheet } from "aphrodite"
import { slideInRight, bounce } from 'react-animations'

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

    const playButtonFunction = () => {

        // Switches which player remaining cards go to if this is the last play of the round
        props.setCardsToP1(true)

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