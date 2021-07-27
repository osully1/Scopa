import P1Hand from '../PlayerHand/P1Hand'

const P1Side = (props) => {
    return(
        <P1Hand
            deckData={props.deckData}
            setDeckData={props.setDeckData}
            p1Hand={props.p1Hand}
            p2Hand={props.p2Hand}
            setP1Hand={props.setP1Hand}
            setP2Hand={props.setP2Hand}
        />
    )
}

export default P1Side;