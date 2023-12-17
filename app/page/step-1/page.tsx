import styles from "./page.module.css"

const StepOne = () => {
    return (
        <div className="wrapperMain">

            <form action="#" method="post" className={styles.form}>
                <h1 className={`${styles.title} text-3xl`}>Personel info</h1>
                <p className="mb-10">Please provide your name, email address, and phone number.</p>
                <div className={styles.group}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="e.g. Stephen King"
                        className={styles.input}
                    />
                </div>
                <div className={styles.group}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" className={styles.input} />
                </div>
                <div className={styles.group}>
                    <div className="flex justify-between items-center">
                        <label htmlFor="phone">Phone Number</label>
                        <span className="error text-red-600">This field is required</span>
                    </div>
                    <input type="number" name="phone" id="phone" placeholder="e.g. +1 234 567 890" className={styles.input} />
                </div>
            </form>
        </div>
    )
}

export default StepOne