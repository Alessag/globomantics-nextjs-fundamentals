import Link from "next/link";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return data;
}

export default async function Page() {
  const posts = await fetchPosts();
  console.log(posts);
  return (
    <>
      <h1>Welcome to Blog Page</h1>
      <h2>
        <Link href="/home">Back to Home</Link>
      </h2>
    </>
  );
}
