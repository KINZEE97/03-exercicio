"use client";

import { useParams } from "next/navigation";
import spaceships from "../../../database/spaceships.json";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Ship() {
    const { id } = useParams<{ id: string }>();

    const ship = spaceships.find((s) => s.id === +id);
    const currentIndex = spaceships.findIndex((ship) => ship.id === +id);
    if (!ship) {
        return <h1>Espaçonave não encontrada</h1>;
    }

    const prevShip = currentIndex > 0 ? spaceships[currentIndex - 1] : null;
    const nextShip =
        currentIndex < spaceships.length - 1
            ? spaceships[currentIndex + 1]
            : null;

    const { name, category, description, model, imageUrl } = ship;

    return (
        <>
            <h1> {name} </h1>
            <Image src={imageUrl} alt={name} height={400} width={950} />
            <p>Classe: {category}</p>
            <p>{model}</p>
            <p>{description}</p>
            <div className={styles.btns}>
                <Link href={"/spaceships"} className={styles.backSpaceships}>
                    Voltar para Espaçonaves
                </Link>
                <div>
                    {prevShip && (
                        <Link
                            href={`/spaceships/${prevShip.id}`}
                            className={`${styles.btn}  ${styles.prevBtn}`}
                        >
                            Anterior
                        </Link>
                    )}
                    {nextShip && (
                        <Link
                            href={`/spaceships/${nextShip.id}`}
                            className={`${styles.btn}  ${styles.nextBtn}`}
                        >
                            Próximo
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}
