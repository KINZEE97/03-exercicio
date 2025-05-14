import ships from "@/app/spaceships.json";
import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
    return (
        <div className={styles.container}>
            <h1>Categorias</h1>

            <div className={styles.shipCategory}>
                {ships.map((ship) => (
                    <Link key={ship.id} href={""} className={styles.ship}>
                        {ship.category}
                    </Link>
                ))}
            </div>
        </div>
    );
}
