"use client";

import { useParams } from "next/navigation";
import spaceships from "@/app/data/spaceships.json";
import Link from "next/link";

export default function Page() {
    const params = useParams();

    if (typeof params.category !== "string") return null;

    const category = params.category.replace("_", " ");
    const categorySpaceship = spaceships.filter(
        (ship) => ship.category === category
    );

    return (
        <main>
            <h1>{category}</h1>

            <ul>
                {categorySpaceship.map((ship) => (
                    <li key={ship.id}>
                        <Link href={`/spaceships/${ship.id}`}>{ship.name}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
