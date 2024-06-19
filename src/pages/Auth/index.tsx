//import { ReactComponent as AuthImage } from '../../assets/react.svg';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';

import './styles.css';

function Auth() {

    return (
        <div className="auth-container">
            <div className="auth-banner-container">
                <h1>Divulgue seus produtos no DS Catalog</h1>
                <p>Faça parte do nosso catálogo de divulgação e aumente a venda dos seus produtos.</p>
                
            </div>
            <div className="auth-form-container">
                <Routes>
                    <Route path="/admin/auth/login">
                        <Login />
                    </Route>
                    <Route path="/admin/auth/signup">
                        <h1>Card de Signup</h1>
                    </Route>
                    <Route path="/admin/auth/recover">
                        <h1>Card de Recover</h1>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default Auth;