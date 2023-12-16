
import Sidebar from '../UI/Sidebar/Sidebar'
import styles from "./page.module.css"

const Home = () => {
    return (
        <>
            <div className={`${styles.flex} p-5`}>
                <div className={styles.flex1}>
                    <Sidebar />
                </div>
                <div className={styles.flex3}>
                    <h3>Main</h3>
                </div>
            </div>
        </>
    )
}

export default Home