import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Welcome to Settings Page</h1>
      <Link href="/settings/profile">
        <h2>Profile</h2>
      </Link>
      <Link href="/settings/password">
        <h2>Password</h2>
      </Link>
      <h2>
        <Link href="/home">Back to Conference</Link>
      </h2>
    </>
  );
}
