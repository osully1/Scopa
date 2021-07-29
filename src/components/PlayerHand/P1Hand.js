import { slideInDown, bounce } from 'react-animations'
import { useState, useEffect } from 'react';
import { css, StyleSheet } from "aphrodite"
import P1Card from './P1Card'

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
            transform: 'translateY(-15px)'
        }
    })

    function toggleCard(e) {
        props.setP1Tally({pCardValue: e, cCardValue: []})
    }

    return props.p1Hand.map((card, idx) => {
        return(
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
            <div className={css([styles.P1Hand, props.p1Tally.pCardValue.code === card.code && styles.P1HandActive])} key={props.idx}>
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