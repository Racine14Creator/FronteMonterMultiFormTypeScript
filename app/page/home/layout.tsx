import Sidebar from "@/app/UI/Sidebar/Sidebar"
import styles from "./index.module.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className={styles.container}>
                <div className={`${styles.flex} p-5`}>
                    <div className={styles.flex1}>
                        <Sidebar />
                    </div>
                    <div className={styles.flex3}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}