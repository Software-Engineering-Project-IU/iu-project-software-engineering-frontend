import Button from '../../Components/Buttons/Button';
import InputField from '../../Components/InputFields/InputField';
import Content from '../../Layout/Content/Content';
import '../../css/main.css';

const Login = () => {
    return (
        <div>
        <Content>
            <div className="form-container">
                <div className="input-group">
                    <InputField label="E-Mail: " type="email" name="email"/>
                </div>
                <div className="input-group">
                    <InputField label="Passwort: " type="password" name="password"/>
                </div>
                <Button text="Login"/>
            </div>
        </Content>
        </div>
    )
}

export default Login;