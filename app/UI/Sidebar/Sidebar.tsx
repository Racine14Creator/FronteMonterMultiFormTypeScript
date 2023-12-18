import styles from "./sidebar.module.css"
const steps = [
    { id: 1, title: 'Step 1', name: "Your info" },
    { id: 2, title: 'Step 2', name: "Select plan" },
    { id: 3, title: 'Step 3', name: "Add-ons" },
    { id: 4, title: 'Step 4', name: "Summary" },
]
const Sidebar = () => {
    return (
        <div className={`${styles.container}`}>
            <ul>
                {steps.map(item => (
                    <li className={`${styles.flex} my-5 cursor-pointer`} key={item.id}>
                        <span className={`${styles.number} ${item.id == 1 ? styles.ActiveIcon + ' text-black' : ''} flex justify-center items-center text-white text-bold p-4 border-white border w-[40px] h-[40px] rounded-full`}>{item.id}</span>
                        <div className={`${styles.col} flex flex-col`}>
                            <span className={styles.title}>{item.title}</span>
                            <span className={styles.name}>{item.name}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar