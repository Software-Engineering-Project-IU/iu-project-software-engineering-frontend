import Content from '../../Layout/Content/Content';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div>
        <Content>
            <div className={styles.home}>
                <h1>Fragenkatalog</h1>
                <p>something</p>
            </div>
        </Content>
        <Content>
            <div className={styles.home}>
                <h1>Lerninhalte finden</h1>
                <p>something</p>
            </div>
        </Content>
        </div>
    )
}

export default Home;