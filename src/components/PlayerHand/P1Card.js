import { slideInDown, bounce } from 'react-animations'
import { useState, useEffect } from 'react';
import { css, StyleSheet } from "aphrodite"

const P1Card = (props) => {

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
            transform: 'translateY(-10px)'
        }
    })


    function toggleCard(e) {
        props.setP1Tally({pCardValue: e, cCardValue: []})
    }
    
    return(
        <div className={css([styles.P1Hand, props.p1Tally.pCardValue.code === props.card.code && styles.P1HandActive])} key={props.idx}>
            <button 
                style={{
                    height: '7em',
                    width: '5em',
                    margin: '1em',
                    backgroundImage: "url(" + `${props.card.image}` + ")",
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no - repeat',
                    backgroundSize: 'cover',
                }}
                onClick={() => {
                    if (props.turn === true) {
                        toggleCard(props.card)
                    }
                }}
            />
        </div>
    )

}

export default P1Card