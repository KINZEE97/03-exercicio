import ships from "@/app/spaceships.json";
import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todas as Espaçonaves</h1>
            <div className={styles.spaceships}>
                {ships.map((ship) => (
                    <Link
                        key={ship.id}
                        href={`/spaceships/${String(ship.id)}`}
                        className={styles.ships}
                    >
                        {ship.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
