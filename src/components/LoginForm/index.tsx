import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import z from "zod";
import imagemFundo from "../../assets/images/john-towner-JgOeRuGD_Y4-unsplash.jpg";

const userFormSchema = z.object({
  email: z.email("Formato de email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type UserFormData = z.infer<typeof userFormSchema>;

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({ resolver: zodResolver(userFormSchema) });

  const handleRegisterUser = (data: UserFormData) => {
    console.log("Dados:", data);
    navigate("/", { state: data });
  };

  return (
    <div className="w-full max-w-120 md:max-w-250 md:min-h-140 md:flex p-6 md:p-4 bg-zinc-800 rounded-2xl shadow-2xl">
      <div className="hidden relative md:w-[50%] md:flex md:flex-col md:items-center md:justify-between">
        <img
          src={imagemFundo}
          alt=""
          className="w-full h-full absolute top-0 left-0 rounded-xl z-0"
        />
        <h2 className="font-bold text-3xl text-fuchsia-50 pt-8 z-10">AMU</h2>
        <p className="text-xl font-semibold text-fuchsia-50 text-center pb-8 z-10">
          Capturando Momentos, <br />
          Criando Memórias
        </p>
      </div>

      <div className="flex md:w-[50%] md:items-center md:justify-center">
        <div className="w-full md:max-w-[70%] flex flex-col gap-4 text-indigo-50">
          <h2 className="text-3xl font-semibold">Entrar</h2>
          <span>
            Nem tem conta ainda?{" "}
            <Link to="/auth/register" className="text-rose-400 underline">
              Registrar
            </Link>
          </span>

          <form
            onSubmit={handleSubmit(handleRegisterUser)}
            className="flex flex-col gap-4 mt-3"
          >
            <fieldset className="flex flex-col gap-4">
              {errors.email ? (
                <span className="text-xs text-center">
                  {errors.email.message}
                </span>
              ) : (
                <span className="h-4"></span>
              )}

              <input
                type="text"
                placeholder="Email"
                {...register("email")}
                className="w-full p-2 pl-4 bg-zinc-600 rounded-lg"
              />
            </fieldset>

            <fieldset className="flex flex-col gap-4 mb-6">
              {errors.password ? (
                <span className="text-xs text-center">
                  {errors.password.message}
                </span>
              ) : (
                <span className="h-4"></span>
              )}

              <input
                type="text"
                placeholder="Senha"
                {...register("password")}
                className="w-full p-2 pl-4 bg-zinc-600 rounded-lg"
              />
            </fieldset>

            <button
              type="submit"
              className="w-full py-2 bg-rose-700 rounded-lg hover:bg-rose-500 hover:cursor-pointer duration-200"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
