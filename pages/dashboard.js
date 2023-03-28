import { signIn, signOut, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
function Dashboard() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else setLoading(false);
    };
    securePage();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
