import Link from "next/link";

// Static site generation by default
async function fetchSpeakers() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json"
  );
  const data = await response.json();
  return data;
}

export default async function Page() {
  const data = await fetchSpeakers();

  return (
    <div className="border-2 border-black max-w-6xl m-auto">
      <h1 className="font-bold text-5xl text-center my-4">
        Welcome to Globomantics Speakers
      </h1>
      <div>Last time updated: {new Date().toLocaleTimeString()}</div>
      <div className="grid grid-cols-2 gap-5">
        {data.speakers.map(({ id, name, bio }) => (
          <div className="border-2 border-pink-300" key={id}>
            <h2 className="font-semibold uppercase text-lg my-2">{name}</h2>
            <p className="text-justify">{bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
