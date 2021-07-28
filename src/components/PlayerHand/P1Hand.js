import { slideInDown, bounce } from 'react-animations'
import { useState, useEffect } from 'react';
import { css, StyleSheet } from "aphrodite"

const P1Hand = (props) => {

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
            ':active': {
                transform: 'translateY(-10px)'
            }
        }
    })

    const [ turnState, setTurnState ] = useState(styles.P1HandActive)

    function toggleCard(e) {
        props.setP1Tally({pCardValue: e, cCardValue: []})
    }

    return props.p1Hand.map((card, idx) => {
        return(
            <div className={css(turnState)} key={idx}>
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