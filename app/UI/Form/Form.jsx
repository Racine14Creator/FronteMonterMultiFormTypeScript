import styles from "./Form.module.css"

const myFormData = [
    {
        id: "name",
        name: "Name",
        placeholder: "e.g. Stephen King",
        type: "text"
    },
    {
        id: "email",
        name: "Email Address",
        placeholder: "e.g. stephenking@lorem.com",
        type: "email"
    },
    {
        id: "phone",
        name: "Phone Number",
        placeholder: "e.g. +1 234 567 890",
        type: "text",
        error: "This field is required"
    },
]

const Form = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h1 className={styles.title}>Personal info</h1>
                    <p>
                        Please provide your name, email address, and phone number.
                    </p>
                </div>
                <form action="#" method="post">
                    {myFormData.map(form => (
                        <div className={styles.group} key={form.id}>
                            <div className={styles.flex}>
                                <label htmlFor={form.id}>
                                    {form.name}
                                </label>
                                <span className={styles.error}>
                                    {form?.error}
                                </span>
                            </div>
                            <input
                                type={form.type}
                                name={form.name}
                                id={form.name}
                                placeholder={form.placeholder}
                                className={styles.input} />
                        </div>
                    ))}
                </form>
            </div>
        </>
    )
}

export default Form