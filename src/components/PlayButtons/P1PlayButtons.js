import styles from './PlayButtons.module.css'

const P1PlayButtons = (props) => {
    return(
        <div className={styles.p1btns}>
            <button style={{marginBottom: '10px'}}>Play Card</button>
            <button>Discard</button>
        </div>
    )
}

export default P1PlayButtons