import { drawCommonCards } from '../../services/card-api';
import styles from './PlayArea.module.css'
import React from 'react'
import { slideInRight } from 'react-animations'
import { css, StyleSheet } from "aphrodite"

const PlayArea = (props) => {
    return props.commonCards.map((card, idx) => {
        return(
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
                key={idx}
            />
        )
    })
}

export default PlayArea;