import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <>
            <div className={`${styles.container} flex justify-between items-center`}>

                <button className={`${styles.button} ${styles.back} ${styles.disable}`}>Go Back</button>
                <button className={styles.button}>Next Step</button>

            </div>
        </>
    )
}

export default Footer