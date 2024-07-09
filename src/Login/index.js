import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../img/logo.png';
import './Logo.css';

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    return (
        <div className='card-geral-login' >
            <div className='case-cardLogin--logo-theos' >
                <div className="card-login">
                    <div className='card-logo-login' >
                        <img src={Logo} />
                    </div>
                    <div className='card-input'>

                        <p>Faça login na sua conta.</p>

                        <label>Email</label>
                        <input type={'email'} value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Senha</label>
                        <input type={'password'} value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <button onClick={Logar} >Entrar</button>
                        <a>Esqueceu sua senha?</a>

                    </div>

                </div>
                <div className='logo-theos' ></div>
            </div>


        </div>

    )

    function Logar() {

        let input1 = 'eclesial@gmail.com';
        let input2 = 123;

        if (input1 == email && input2 == senha) {
            navigate('/dashboard');
        } else {
            navigate('/');
            setEmail('');
            setSenha('')
        }
    }
}