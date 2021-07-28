import styles from './PlayerHand.module.css'

const P2Hand = (props) => {

    function toggleCard(e) {
        props.setP2Tally({pCardValue: e, cCardValue: []})
    }

    return props.p2Hand.map((card, idx) => {
        return(
            <div className={styles.hand2Container} key={idx}>
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
                        if (props.turn === false) {
                            toggleCard(card)
                        }
                    }}
                />
            </div>
        )
    })
}

export default P2Hand;