import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import z from "zod";

const userFormSchema = z.object({
    email: z.email("Formato de email inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
})

type UserFormData = z.infer<typeof userFormSchema>;

export default function LoginForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm<UserFormData>({ resolver: zodResolver(userFormSchema) });

    const handleRegisterUser = (data: UserFormData) => {
        console.log("Dados:", data);
        navigate("/");
    }

  return (
    <div className="w-full max-w-250 p-6 bg-zinc-800 rounded-2xl shadow-2xl">
        <div></div>

        <div className="flex flex-col gap-4 text-indigo-50">
            <h2 className="text-3xl font-semibold">Entrar</h2>
            <span>Nem tem conta ainda? <Link to="/auth/register" className="text-purple-500 underline">Registrar</Link></span>

            <form onSubmit={handleSubmit(handleRegisterUser)} className="flex flex-col gap-4 mt-3">
                <fieldset className="flex flex-col gap-4">
                    {errors.email ? <span className="text-xs text-center">{errors.email.message}</span> : <span className="h-4"></span>}

                    <input type="text" placeholder="Email" {...register('email')} className="w-full p-2 pl-4 bg-zinc-600 rounded-lg" />
                </fieldset>

                <fieldset className="flex flex-col gap-4 mb-6">
                    {errors.password ? <span className="text-xs text-center">{errors.password.message}</span> : <span className="h-4"></span>}

                    <input type="text" placeholder="Senha" {...register('password')} className="w-full p-2 pl-4 bg-zinc-600 rounded-lg" />
                </fieldset>

                <button type="submit" className="w-full py-2 bg-purple-700 rounded-lg hover:bg-purple-500 hover:cursor-pointer duration-200">Entrar</button>
            </form>
        </div>
    </div>
  );
}
