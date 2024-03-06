import Button from '../../Components/Buttons/Button';
import Content from '../../Layout/Content/Content';
import '../../css/main.css';

const Home = () => {
    return (
        <div>
        <Content>
            <div className="home">
                <Button text="Fragenkatalog einsehen"/>
            </div>
        </Content>
        <Content>
            <div className="home">
            <Button text="Lerninhalte finden"/>
            </div>
        </Content>
        </div>
    )
}

export default Home;