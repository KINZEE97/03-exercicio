import Link from "next/link";
import styles from "./styles.module.css";
import spaceships from "@/database/spaceships.json";

export default function Categories() {
    const filtered = new Set(spaceships.map((ship) => ship.category));
    const categories = [...filtered];

    return (
        <>
            <h1>Categorias</h1>
            <div className={styles.wrapper}>
                {categories.map((category) => (
                    <Link
                        key={category}
                        href={`/categories/${category.replace(" ", "_")}`}
                        className={styles.categoryBtn}
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </>
    );
}
