import styles from './ForNataliia.module.css';

const ForNataliia = (props) => {
    if (props.gameOn === false) {
        return (
            <div className={styles.landingPage}>
                <h1 className={styles.title}>Scopa</h1>
                <h3 className={styles.forN}>For Nataliia</h3>
            </div>
        )
    } else {
        return (
            <p className={styles.nothing}></p>
        )
    }
}

export default ForNataliia