import { slideInDown, bounce } from 'react-animations'
import { css, StyleSheet } from "aphrodite"

const P1Hand = (props) => {

    // In-line style section for animations and "active" style for select translate up
    const styles = StyleSheet.create({
        P1Hand: {
            animationName: slideInDown,
            animationDuration: '1s',
            margin: '1rem',
        },
        P1HandActive: {
            animationName: slideInDown,
            animationDuration: '1s',
            margin: '1rem',
            transform: 'translateY(-15px)'
        }
    })

    // onClick for card buttons. Selects card, stores it in pTally, and allows you to deselect card
    function toggleCard(e) {
        if (props.p1Tally.pCardValue === e) {
            props.setP1Tally({pCardValue: {}, cCardValue: []})
        } else {
        props.setP1Tally({pCardValue: e, cCardValue: []})
        }
    }

    return props.p1Hand.map((card, idx) => {
        return(

            // Obselete card component below. Could be useful later.
            // <P1Card
            //     card={card}
            //     idx={idx}
            //     p1Hand={props.p1Hand}
            //     setP1Hand={props.setP1Hand}
            //     p1Tally={props.p1Tally}
            //     setP1Tally={props.setP1Tally}
            //     turn={props.turn}
            //     setTurn={props.setTurn}
            // />

            // className below will switch styles without need of state
            <div className={css([styles.P1Hand, props.p1Tally.pCardValue.code === card.code && styles.P1HandActive])} key={idx}>
                <button 
                    style={{
                        height: '7em',
                        width: '5em',
                        margin: '1em',
                        backgroundImage: "url(" + `${card.image}` + ")",
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no - repeat',
                        backgroundSize: 'cover',
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