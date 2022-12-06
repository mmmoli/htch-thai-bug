import {
  useSignInEmailPassword,
  useAuthenticationStatus,
  useSignOut,
} from "@nhost/react";

export const Auth = () => {
  const { isLoading, signInEmailPassword, user } = useSignInEmailPassword();
  const { isAuthenticated } = useAuthenticationStatus();
  const { signOut } = useSignOut();

  const handleSignIn = () => {
    signInEmailPassword("michele@htch.app", "abcdef123456");
  };
  const handleSignOut = () => {
    signOut();
  };

  return (
    <ul>
      <li>
        <button onClick={handleSignIn}>Login</button>
      </li>
      <li>
        <button onClick={handleSignOut}>Logout</button>
      </li>
      <li>
        {isAuthenticated ? user?.email : isLoading ? "…" : "Not logged in"}
      </li>
    </ul>
  );
};
