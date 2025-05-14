"use client";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import ships from "@/app/spaceships.json";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Spaceship {
    id: number;
    name: string;
    model: string;
    category: string;
    description: string;
    imageUrl: string;
}

export default function Page() {
    const [spaceship, setSpaceship] = useState<Spaceship | null>(null);
    const params = useParams();

    useEffect(() => {
        if (params?.id) {
            const foundShip = ships.find(
                (ship) => ship.id === Number(params.id)
            );
            if (foundShip) {
                setSpaceship(foundShip);
            } else {
                console.error("Nave espacial não encontrada.");
            }
        }
    }, [params]);

    if (!spaceship) {
        return <div>Carregando...</div>;
    }

    const currentIndex = ships.findIndex(
        (ship) => ship.id === Number(params.id)
    );
    const nextIndex = (currentIndex + 1) % ships.length;
    const nextShipId = ships[nextIndex].id;
    const isFirstShip = currentIndex === 0;
    const isLastShip = currentIndex === ships.length - 1;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{spaceship.name}</h1>
            <Image
                src={spaceship.imageUrl}
                alt={spaceship.name}
                width={768}
                height={432}
            />
            <p>{spaceship.category}</p>
            <p>{spaceship.model}</p>
            <p>{spaceship.description}</p>

            <div className={styles.wrapper}>
                <Link
                    href={
                        isFirstShip
                            ? "/spaceships"
                            : `/spaceships/${ships[currentIndex - 1].id}`
                    }
                    className={`${styles.btn}`}
                >
                    {isFirstShip ? "Voltar para Espaçonaves" : "Voltar"}
                </Link>
                <Link
                    href={
                        isLastShip ? "/spaceships" : `/spaceships/${nextShipId}`
                    }
                    className={`${styles.btn}`}
                >
                    {isLastShip ? "Voltar para Espaçonaves" : "Proximo"}
                </Link>
            </div>
        </div>
    );
}
