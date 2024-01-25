import styles from "../../styles/Detail.module.scss";

const Detail = () => {
  return (
    <div className={styles.Detail}>
      <h1 className={styles.title}>How to use the Pokedex</h1>
      <ul className={styles.instructions}>
        <li className={styles.instruction}>
          <h3>Find one </h3>
          <p>
            In most Pokemon games, you will receive a Pokédex at the beginning
            of the adventure. It is usually given to the player by a Training
            Professor, so look for the closest one and make sure you don't miss
            him.
          </p>
        </li>
        <li className={styles.instruction}>
          <h3>Find Pokemon</h3>
          <p>
            Now that you have your Pokédex it's time to start filling it with
            information. Every time you find a new pokemon, use the device to
            scan it and record it in the metadata log.
          </p>
        </li>
        <li className={styles.instruction}>
          <h3>Use your knowledge</h3>
          <p>
            Once you've scanned a few pokemon, the Pokédex will start recording
            their basic information. This includes their image, name, types,
            weight, stats, and abilities.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Detail;
