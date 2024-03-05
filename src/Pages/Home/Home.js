import { Link } from 'react-router-dom';
import Content from '../../Layout/Content/Content';
import styles from './Home.module.css';

const Home = () => {
    return (
        <Content>
            <div className={styles.home}>
                <h1>Welcome to the Quiz</h1>
                <p>something</p>
            </div>
        </Content>
    )
}

export default Home;