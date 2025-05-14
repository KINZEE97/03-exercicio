"use client";

import spaceships from "@/app/data/spaceships.json";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
    const { id } = useParams();
    if (!id) return null;
    const ship = spaceships.find((ship) => ship.id === +id);
    if (!ship) return null;
    return (
        <main>
            <h1>{ship.name}</h1>

            <p>
                <Image
                    src={ship.imageUrl}
                    alt={ship.name}
                    width={768}
                    height={432}
                />
            </p>

            <p>
                <strong>classe: </strong>
                {ship.category}
            </p>

            <p>
                <strong>Modelo: </strong>
                {ship.model}
            </p>

            <p>{ship.description}</p>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                }}
            >
                <Link className="btn" href={"/spaceships"}>
                    Voltar para Espaçonaves
                </Link>

                <Link
                    className="btn"
                    href={`/spaceships/${+id - 1}`}
                    style={{ display: +id === 1 ? "none" : "block" }}
                >
                    Anterior
                </Link>

                <Link
                    className="btn"
                    href={`/spaceships/${+id + 1}`}
                    style={{
                        display: spaceships.length === +id ? "none" : "block",
                    }}
                >
                    Próximo
                </Link>
            </div>
        </main>
    );
}
