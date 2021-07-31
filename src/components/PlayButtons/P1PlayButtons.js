import styles from './PlayButtons.module.css'
import { css, StyleSheet } from "aphrodite"

const P1PlayButtons = (props) => {

    const stylesb = StyleSheet.create({
        P1Play: {
            marginBottom: '10px',
            pointerEvents: 'none',
            opacity: '0.65'
        },
        P1PlayActive: {
            marginBottom: '10px',
            pointerEvents: 'auto',
            opacity: '1'
        }
    })

    const playButtonFunction = () => {
        props.setCardsGoToP1(true)

        let newHand = [...props.p1Hand]

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
                className={css([stylesb.P1Play, props.p1Tally.pCardValue.value === props.p1Tally.cCardValue.map(x => x.value).reduce((a, b) => a + b, 0) && stylesb.P1PlayActive])}
            >Play Card</button>
            <button>Discard</button>
        </div>
    )
}

export default P1PlayButtons