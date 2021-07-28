import { drawCommonCards } from '../../services/card-api';
import styles from './PlayArea.module.css'
import React from 'react'
import { slideInRight } from 'react-animations'
import { css, StyleSheet } from "aphrodite"

const PlayArea = (props) => {

    const styles = StyleSheet.create({
        CommonCards: {
            animationName: slideInRight,
            animationDuration: '1s',
            height: '7em',
            width: '5em',
            margin: '1rem',
            backgroundPosition: 'center',
            backgroundRepeat: 'no - repeat',
            backgroundSize: 'cover'
        }
    })

    return props.commonCards.map((card, idx) => {
        return(
            <button 
                className={css(styles.CommonCards)}
                style={{backgroundImage: "url(" + `${card.image}` + ")"}}
                key={idx}
            />
        )
    })
}

export default PlayArea;