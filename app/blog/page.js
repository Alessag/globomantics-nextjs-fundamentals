import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Welcome to Blog Page</h1>
      <h2>
        <Link href="/home">Back to Home</Link>
      </h2>
    </>
  );
}
