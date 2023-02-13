import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <img alt="kiwify" src="https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png" />
        <h2>Entrar na sua conta</h2>
        <span>
          Ou 
          {" "}
          <Link to="/signup" className="">
            fazer cadastro
          </Link>
        </span>

        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
