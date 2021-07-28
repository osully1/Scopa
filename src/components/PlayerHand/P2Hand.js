import { slideInUp } from 'react-animations'
import { css, StyleSheet } from "aphrodite"

const P2Hand = (props) => {

    const styles = StyleSheet.create({
        P2Hand: {
            animationName: slideInUp,
            animationDuration: '1s',
            margin: '1rem'
        }
    })

    function toggleCard(e) {
        props.setP2Tally({pCardValue: e, cCardValue: []})
    }

    return props.p2Hand.map((card, idx) => {
        return(
            <div className={css(styles.P2Hand)} key={idx}>
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