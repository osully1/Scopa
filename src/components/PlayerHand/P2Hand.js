import { slideInUp } from 'react-animations'
import { css, StyleSheet } from "aphrodite"

const P2Hand = (props) => {

    // In-line style section for animations and "active" style for select translate up
    const styles = StyleSheet.create({
        P2Hand: {
            animationName: slideInUp,
            animationDuration: '1s',
            margin: '1rem',
        },
        P2HandActive: {
            animationName: slideInUp,
            animationDuration: '1s',
            margin: '1rem',
            transform: 'translateY(-15px)'
        }
    })

    // onClick for card buttons. Selects card, stores it in pTally, and allows you to deselect card
    function toggleCard(e) {
        if (props.p2Tally.pCardValue === e) {
            props.setP2Tally({pCardValue: {}, cCardValue: []})
        } else {
        props.setP2Tally({pCardValue: e, cCardValue: []})
        }
    }

    return props.p2Hand.map((card, idx) => {
        return(
            // className below will switch styles without need of state
            <div className={css([styles.P2Hand, props.p2Tally.pCardValue.code === card.code && styles.P2HandActive])} key={idx}>
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