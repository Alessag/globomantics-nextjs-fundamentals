import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Welcome to Profile Page</h1>
      <h2>
        <Link href="/settings">Back to Settings</Link>
      </h2>
    </>
  );
}
