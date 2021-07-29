import { slideInRight, bounce } from 'react-animations'
import { css, StyleSheet } from "aphrodite"

const PlayArea = (props) => {

    const styles = StyleSheet.create({
        CommonCards: {
            animationName: slideInRight,
            animationDuration: '1s',
        },
        CommonCardsActive: {
            animationName: slideInRight,
            animationDuration: '1s',
            transform: 'translateY(-15px)'
        }
    })

    function toggleCardP1(e) {
        let newArr1 = props.p1Tally.cCardValue.concat(e)
        props.setP1Tally((prevState) => ({
            ...prevState,
            cCardValue: newArr1
        }))
    }

    function toggleCardP2(e) {
        let newArr2 = props.p2Tally.cCardValue.concat(e)
        props.setP2Tally((prevState) => ({
            ...prevState,
            cCardValue: newArr2
        }))
    }

    return props.commonCards.map((card, idx) => {
        return(
            <div className={css([styles.CommonCards, props.p1Tally.cCardValue.includes(card) /*|| props.p2Tally.cCardValue.includes(card)*/ && styles.CommonCardsActive])}>
                <button 
                    style={{
                        height: '7em',
                        width: '5em',
                        margin: '1rem',
                        backgroundImage: "url(" + `${card.image}` + ")",
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no - repeat',
                        backgroundSize: 'cover'
                    }}
                    onClick={() => {
                        if (
                            Object.keys(props.p1Tally.pCardValue).length
                            && props.turn === true
                            && props.p1Tally.cCardValue.length < 4
                            && props.p1Tally.cCardValue.every(function (i) {
                                return i.code !== card.code
                            })) {
                            toggleCardP1(card)
                        } else if (
                            Object.keys(props.p2Tally.pCardValue).length
                            && props.turn === false
                            && props.p2Tally.cCardValue.length < 4
                            && props.p2Tally.cCardValue.every(function (i) {
                                return i.code !== card.code
                            })) {
                            toggleCardP2(card)
                        }
                    }}
                    key={idx}
                />
            </div>
        )
    })
}

export default PlayArea;