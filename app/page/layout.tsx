import { ReactNode } from 'react';
import Sidebar from '../UI/Sidebar/Sidebar';
import styles from './page.module.css';
import StepOne from './step-1/page';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
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
    );
};

export default Layout;
