import styles from './PlayButtons.module.css'
import { css, StyleSheet } from "aphrodite"

const P1PlayButtons = (props) => {

    const styles = StyleSheet.create({
        P1Play: {
            marginBottom: '10px',
            pointerEvents: 'none'
        },
        P1PlayActive: {
            marginBottom: '10px',
            backgroundColor: 'red'
        }
    })

    return(
        <div className={styles.p1btns}>
            <button 
                // className will change play button to active when value of player card matches the sum of values of selected common cards
                className={css([styles.P1Play, props.p1Tally.pCardValue.value === props.p1Tally.cCardValue.map(x => x.value).reduce((a, b) => a + b, 0) && styles.P1PlayActive])}
            >Play Card</button>
            <button>Discard</button>
        </div>
    )
}

export default P1PlayButtons