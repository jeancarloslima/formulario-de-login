export default function ProfileCard({ name, lastName, email, password }) {
  return (
    <div className="w-full max-w-250 flex flex-col gap-4 p-6 bg-zinc-800 rounded-2xl shadow-2xl text-indigo-50">
      <h2 className="text-center text-3xl font-semibold">Perfil</h2>

      {name && (
        <div className="flex items-center justify-between">
        <h3 className="font-semibold">Nome:</h3>
        <p>{name}</p>
      </div>
      )}

      {lastName && (
        <div className="flex items-center justify-between">
        <h3 className="font-semibold">Sobrenome:</h3>
        <p>{lastName}</p>
      </div>
      )}

      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Email:</h3>
        <p>{email}</p>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Senha:</h3>
        <p>{password}</p>
      </div>
    </div>
  );
}
