import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
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
    <div>
      <h1>Login</h1>
    </div>
  );
}
