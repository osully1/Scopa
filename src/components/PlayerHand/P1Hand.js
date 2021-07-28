import styles from './PlayerHand.module.css'

const P1Hand = (props) => {

    function toggleCard(e) {
        props.setP1Tally({pCardValue: e, cCardValue: []})
    }

    return props.p1Hand.map((card, idx) => {
        return(
            <div className={styles.hand1Container} key={idx}>
                <button 
                    style={{
                        height: '7em',
                        width: '5em',
                        margin: '1em',
                        backgroundImage: "url(" + `${card.image}` + ")",
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no - repeat',
                        backgroundSize: 'cover'
                    }}
                    onClick={() => {
                        if (props.turn === true) {
                            toggleCard(card)
                        }
                    }}
                />
            </div>
        )
    })
}

export default P1Hand;