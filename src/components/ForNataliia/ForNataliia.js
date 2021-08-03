import styles from './ForNataliia.module.css';
import { css, StyleSheet } from "aphrodite"
import { fadeIn, fadeInDown } from 'react-animations'

const ForNataliia = (props) => {

    const stylesb = StyleSheet.create({
        title: {
            fontSize: '3em',
            // animationName: fadeInDown,
            // animationDuration: '1s',
        },
        forN: {
            fontSize: '1em',
            animationName: fadeInDown,
            animationDuration: '3s',
        }
    })

    if (props.gameOn === false) {
        return (
            <div className={styles.landingPage}>
                <h1 className={css(stylesb.title)}>Scopa</h1>
                <h3 className={css(stylesb.forN)}>For Nataliia</h3>
            </div>
        )
    } else {
        return (
            <p className={styles.nothing}></p>
        )
    }
}

export default ForNataliia