import { useLocation } from "react-router";
import ProfileCard from "../../components/ProfileCard";

export default function HomePage() {
  const location = useLocation();
  const { name, lastName, email, password } = location.state || {};

  return (
    <div className="w-screen min-h-screen flex items-center justify-center p-4 bg-zinc-600">
      <ProfileCard name={name} lastName={lastName} email={email} password={password} />
    </div>
  );
}
