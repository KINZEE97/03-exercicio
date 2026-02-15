"use client";

import { useParams } from "next/navigation";
import spaceships from "@/database/spaceships.json";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Category() {
    const params = useParams();

    if (typeof params.category !== "string") return null;

    const category = params.category.replace("_", " ");
    const spaceshipCategory = spaceships.filter(
        (ship) => ship.category === category,
    );

    return (
        <>
            <h1>{category}</h1>
            <div className={styles.spaceshipsBtn}>
                {spaceshipCategory.map((ship) => (
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
