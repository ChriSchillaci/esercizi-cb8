import Link from "next/link";
import styles from "./index.module.scss";

const Layout = () => {
  return (
    <nav className={styles.Layout}>
      <Link className={styles.link} href="/">
        Home
      </Link>
      <Link className={styles.link} href="/auguri">
        Auguri
      </Link>
    </nav>
  );
};

export default Layout;
