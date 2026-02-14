import styles from "./styles.module.css";
import spaceships from "../../database/spaceships.json";
import Link from "next/link";

export default function Spaceships() {
    return (
        <>
            <h1 className={styles.title}>Todas as Espaçonaves</h1>
            <div className={styles.spaceshipsBtn}>
                {spaceships.map((ship) => (
                    <Link
                        href={`/spaceships/${ship.id}`}
                        key={ship.id}
                        className={styles.shipsBtn}
                    >
                        {ship.name}
                    </Link>
                ))}
            </div>
        </>
    );
}
