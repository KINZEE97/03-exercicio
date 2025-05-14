import spaceships from "@/app/data/spaceships.json";
import Link from "next/link";

export default function Page() {
    const setCategories = new Set(spaceships.map((ship) => ship.category));
    const categoriesArray = Array.from(setCategories);
    return (
        <main>
            <h1>Categorias</h1>

            <ul>
                {categoriesArray.map((category) => (
                    <li key={category}>
                        <Link
                            href={`/categories/${category.replace(" ", "_")}`}
                            className="btn"
                        >
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
