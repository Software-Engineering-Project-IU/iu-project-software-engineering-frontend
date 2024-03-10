import Button from '../../Components/Buttons/Button';
import InputField from '../../Components/InputFields/InputField';
import Content from '../../Layout/Content/Content';

const Login = () => {
    return(
        <div>
        <Content>
            <div className="home">
                <InputField label="E-Mail: " type="email" name="email"/>
                <InputField label="Passwort: " type="password" name="password"/>
                <Button text="Login"/>
            </div>
        </Content>
        </div>
    )
}

export default Login;