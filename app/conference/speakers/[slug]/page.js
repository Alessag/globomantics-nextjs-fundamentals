import styles from "../../conference.module.css";

async function fetchSpeakerInfo(params) {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json"
  );

  const { speakers } = await response.json();
  const speakerInfo = speakers?.find((speaker) => speaker.id === params.slug);

  return speakerInfo;
}

export default async function Page({ params }) {
  const speakerInfo = await fetchSpeakerInfo(params);
  const { name, bio, sessions } = speakerInfo;

  return (
    <div className={styles.infoContainer}>
      <h3 className={styles.titleText}>{name}</h3>
      <h5 className={styles.descText}>About: {bio}</h5>
      {sessions &&
        sessions.map(({ name, id }) => (
          <div key={id}>
            <h5 className={styles.descText}>Session: {name}</h5>
          </div>
        ))}
    </div>
  );
}
