import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import '../login/Login.css'
import { Link } from "react-router-dom";

const Register = () => {
    return (<>

        <div className="register">
            <form action="">
                <h1>Registration</h1>
                <div className="input-box">
                    <input className="input" type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input className="input" type="email" placeholder='Email' required />
                    <FaEnvelope className='icon' />
                </div>
                <div className="input-box">
                    <input className="input" type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />I agree to the terms & conditions</label>
                </div>
                <button type='submit'>Register</button>
                <div className="register-link">
                    <p>Already have an account? <Link to={'/login'}>Login</Link></p>
                </div>
            </form>

        </div>



    </>);
}

export default Register;