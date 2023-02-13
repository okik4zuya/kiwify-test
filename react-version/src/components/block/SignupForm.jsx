import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    formState: { errors },
    getValues
  } = useForm({ mode: "all" });

  const registerOptions = {
    email: {
      required: "Esse campo é obrigatório",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "O e-mail deve ser válido",
      },
    },
    repeatEmail: {
      required: "Esse campo é obrigatório",
      validate: (match) => {
            const email = getValues("email")
            return match === email || "Os dois e-mails devem ser iguais."
        }
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
        <label>Repetir e-mail</label>
        <input
          {...register("repeatEmail", registerOptions.repeatEmail)}
          className={`form-control ${errors?.repeatEmail && "invalid"}`}
          name="repeatEmail"
          type="email"
        />
        {errors?.repeatEmail?.message && (
          <p className="warning" style={{ marginTop: "4px" }}>
            {errors.repeatEmail.message}
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
      <div style={{ marginTop: "1.5rem" }}>
        <label className="approve">
          <div>
            <input type="checkbox" className="form-checkbox" />
          </div>
          <div>
            <span>
              Eu li e aceito os{" "}
              <a
                href="https://kiwify.com.br/termos-de-uso"
                target="_blank"
                className="underline"
              >
                {" "}
                termos de uso
              </a>
              ,{" "}
              <a
                href="https://kiwify.com.br/licenca-de-uso-software"
                target="_blank"
                className="underline"
              >
                {" "}
                termos de licença de uso de software
              </a>
              ,{" "}
              <a
                href="https://kiwify.com.br/politica-de-conteudo"
                target="_blank"
                className="underline"
              >
                política de conteúdo
              </a>{" "}
              da Kiwify
            </span>
          </div>
        </label>
      </div>
      <div className="button-container" style={{ marginTop: "1.5rem" }}>
        <button type="button" className="button">
          Entrar
        </button>
      </div>
    </form>
  );
};
export default SignupForm;
