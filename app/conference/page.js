import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Welcome to Conference Page</h1>
      <Link href="/conference/speakers">
        <h2>Speakers</h2>
      </Link>
      <Link href="/conference/sessions">
        <h2>Sessions</h2>
      </Link>
      <h2>
        <Link href="/home">Back to Home</Link>
      </h2>
    </>
  );
}
