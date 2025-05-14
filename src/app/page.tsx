import Link from "next/link";
export default function Home() {
    return (
        <div className="container">
            <h1 className="title">Conheça a Naves do Universo Star Wars</h1>
            <Link href="/spaceships" className="btn">
                Ver Todas
            </Link>
        </div>
    );
}
