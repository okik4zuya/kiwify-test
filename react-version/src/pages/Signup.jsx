import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <img alt="kiwify" src="https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png" />
        <h2> Criar nova conta </h2>
        <span>
          Ou {" "}
          <Link to="/login">entrar na sua conta existente</Link>
        </span>
        <SignupForm/>
      </div>
    </div>
  );
};
export default Signup;
