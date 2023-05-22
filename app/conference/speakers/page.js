import styles from "../conference.module.css";
import Link from "next/link";

// Static data fetching
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
    <div className={styles.parentContainer}>
      <h1 className={styles.title}>Welcome to Globomantics Speakers</h1>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 w-min">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <div className={styles.wrapper}>
        {data.speakers.map(({ id, name, bio }) => (
          <div key={id} className={styles.infoContainer}>
            <Link
              className={styles.bgLinks}
              href={`/conference/speakers/${id}`}
            >
              <h3 className={styles.titleText}>{name}</h3>
            </Link>
            <p className={styles.descText}>{bio}</p>
          </div>
        ))}
      </div>
      sdfdsfds
    </div>
  );
}
