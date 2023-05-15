import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Welcome to Home Page</h1>
      <Link href="/blog">
        <h2>Blog</h2>
      </Link>
      <Link href="/conference">
        <h2>Conference</h2>
      </Link>
      <Link href="/settings">
        <h2>Settings</h2>
      </Link>
    </>
  );
}
