import { useState } from 'react';
import { isValidEmail } from '../../Components/HelpFunctions/utils';
import Button from '../../Components/Buttons/Button';
import InputField from '../../Components/InputFields/InputField';
import Content from '../../Layout/Content/Content';
import '../../css/main.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Login-Request
    const handleLogin = () => {
        
        // Validate E-Mail
        if (!isValidEmail(email)) {
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            return;
        }

        console.log("Login attempted with Email: ", email, " and Password: ", password);
        // API-Request
    }

    return (
        <div>
        <Content>
            <div className="form-container">
                <div className="input-group">
                    <InputField label="E-Mail: " type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-group">
                    <InputField label="Password: " type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button text="Login" onClick={handleLogin}/>
            </div>
        </Content>
        </div>
    )
}

export default Login;