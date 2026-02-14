import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <h1>Conheça as Naves do Universo Star Wars</h1>
            <Link href={"/spaceships"} className={styles.seeAllBtn}>
                Ver todos
            </Link>
        </div>
    );
}
