import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/Pokedex.module.scss";

export default function Pokedex() {
  const router = useRouter();
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonAbility, setPokemonAbility] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
  }, [router.query.name]);

  useEffect(() => {
    pokemonData?.abilities?.map((ability) =>
      fetch(ability.ability.url).then((res) =>
        res
          .json()
          .then((data) =>
            setPokemonAbility((prev) => [...prev, data.effect_entries[1]])
          )
      )
    );
  }, [pokemonData]);
  console.log(pokemonAbility);

  const colorType = (type) => {
    if (type === "fire") return "#ff9d55";
    else if (type === "grass") return "#63bc5a";
    else if (type === "water") return "#5090d6";
    else if (type === "flying") return "#8fa9de";
    else if (type === "poison") return "#aa6bc8";
    else if (type === "ground") return "#d97845";
    else if (type === "rock") return "#c5b78c";
    else if (type === "bug") return "#91c12f";
    else if (type === "ghost") return "#5269ad";
    else if (type === "steel") return "#5a8ea2";
    else if (type === "electric") return "#f4d23c";
    else if (type === "psychic") return "#fa7179";
    else if (type === "ice") return "#73cec0";
    else if (type === "dragon") return "#0b6dc3";
    else if (type === "dark") return "#5a5465";
    else if (type === "fairy") return "#ec8fe6";
    else if (type === "fighting") return "#ce416b";
    else return "#929da3";
  };

  return (
    <>
      {pokemonData.sprites ? (
        <div className={styles.Pokedex}>
          <div className={styles["main-info"]}>
            <img
              className={styles.image}
              src={pokemonData.sprites.other.showdown.front_default}
              alt=""
            />

            <h1 className={styles.title}>{pokemonData.name.toUpperCase()}</h1>

            <div className={styles.types}>
              {pokemonData.types.map((type, i) => (
                <p
                  className={styles.type}
                  style={{ backgroundColor: colorType(type.type.name) }}
                  key={i}
                >
                  {type.type.name}
                </p>
              ))}
            </div>

            <div className={styles.weaknesses}></div>

            <div className={styles.info}>
              <p>Weight: {pokemonData.weight}</p>
              <p>Height: {pokemonData.height}</p>
            </div>

            <ul className={styles.stats}>
              {pokemonData.stats.map((stat, i) => (
                <li className={styles.stat} key={i}>
                  <p>{stat.base_stat}</p>
                  <p>{stat.stat.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.abilities}>
            <div className={styles.name}>
              {pokemonData.abilities.map((abilityName) => (
                <h4>{abilityName.ability.name}:</h4>
              ))}
            </div>
            <div className={styles.description}>
              {pokemonAbility.map((ability) => (
                <p>{ability.short_effect}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className={styles.notFound}>{router.query.name + " not found"}</p>
      )}
    </>
  );
}
