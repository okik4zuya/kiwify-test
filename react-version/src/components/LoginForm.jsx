import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  const registerOptions = {
    email: {
      required: "Esse campo é obrigatório",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "O e-mail deve ser válido",
      },
    },
    password: {
      required: "Esse campo é obrigatório",
      minLength: {
        value: 1,
      },
    },
  };

  return (
    <form>
      <div className="form-group">
        <label>E-mail</label>
        <input
          {...register("email", registerOptions.email)}
          className={`form-control ${errors?.email && "invalid"}`}
          name="email"
          type="email"
        />
        {errors?.email?.message && (
          <p className="warning" style={{ marginTop: "4px" }}>
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="form-group" style={{ marginTop: "1.5rem" }}>
        <label>Senha</label>
        <input
          {...register("password", registerOptions.password)}
          className={`form-control ${errors?.password && "invalid"}`}
          name="password"
          type="password"
        />
        {errors?.password?.message && (
          <p className="warning" style={{ marginTop: "4px" }}>
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="reset-password">
        <a href="/ResetPassword">Esqueceu a senha?</a>
      </div>
      <div className="button-container" style={{ marginTop: "1.5rem" }}>
        <button type="button" className="button">
          Entrar
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
