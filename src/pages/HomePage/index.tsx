import { useLocation, useNavigate } from "react-router";
import ProfileCard from "../../components/ProfileCard";
import { useEffect } from "react";

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, lastName, email, password } = location.state || {};

  useEffect(() => {
    if (!email) {
      navigate("/auth/register");
    }
  }, []);

  return (
    <div className="w-screen min-h-screen flex items-center justify-center p-4 bg-zinc-600">
      <ProfileCard
        name={name}
        lastName={lastName}
        email={email}
        password={password}
      />
    </div>
  );
}
