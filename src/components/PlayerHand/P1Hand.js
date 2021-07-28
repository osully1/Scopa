import { slideInDown, bounce } from 'react-animations'
import { useState, useEffect } from 'react';
import { css, StyleSheet } from "aphrodite"
import P1Card from './P1Card'

const P1Hand = (props) => {

    // const styles = StyleSheet.create({
    //     P1Hand: {
    //         animationName: slideInDown,
    //         animationDuration: '1s',
    //         margin: '1rem',
    //     },
    //     P1HandActive: {
    //         animationName: slideInDown,
    //         animationDuration: '1s',
    //         margin: '1rem',
    //         ':active': {
    //             transform: 'translateY(-10px)'
    //         }
    //     }
    // })

    // function toggleCard(e) {
    //     props.setP1Tally({pCardValue: e, cCardValue: []})
    // }

    return props.p1Hand.map((card, idx) => {
        return(
            <P1Card
                card={card}
                idx={idx}
                p1Hand={props.p1Hand}
                setP1Hand={props.setP1Hand}
                p1Tally={props.p1Tally}
                setP1Tally={props.setP1Tally}
                turn={props.turn}
                setTurn={props.setTurn}
            />
        )
    })
}

export default P1Hand;