import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import styles from "../../styles/Auguri.module.scss";

export default function Auguri() {
  const [colorConfetti, setColorConfetti] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateSizes = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", updateSizes);

    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const handleColor = (e) => {
    setColorConfetti([e.target.value]);
  };

  return (
    <div className={styles.Auguri}>
      <Confetti width={width} height={height} colors={colorConfetti} />
      <div className={styles["input-container"]}>
        <p>Write a color</p>
        <input type="text" value={colorConfetti} onChange={handleColor} />
      </div>
    </div>
  );
}
