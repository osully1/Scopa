import styles from './PlayerHand.module.css'

const P2Hand = (props) => {
    return props.p2Hand.map((card, idx) => {
        return(
            <div className={styles.hand2Container}>
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
            </div>
        )
    })
}

export default P2Hand;