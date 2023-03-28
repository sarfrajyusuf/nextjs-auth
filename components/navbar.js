import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/client";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  // const [session, loading] = useSession();
  const { data: session, loading } = useSession();

  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className={`main-nav ${!session && loading ? "loading" : "loaded"}`}>
        {/* if user not sign in signout button Hide 
          and if user sign in sign out display
        */}
        <li>
          <Link href="/">Home</Link>
        </li>
        {session && (
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        )}
        {session && (
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        )}

        {!loading && !session && (
          <li>
            <Link
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign In
            </Link>
          </li>
        )}

        {session && (
          <li>
            <Link
              href="/api/auth/signout"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
