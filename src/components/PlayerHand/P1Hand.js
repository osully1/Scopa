import styles from './PlayerHand.module.css'

const P1Hand = (props) => {
    return props.p1Hand.map((card, idx) => {
        return(
            <div className={styles.hand1Container}>
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

export default P1Hand;