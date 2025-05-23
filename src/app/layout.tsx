import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <header>
                    <div>Exercicio 3 - Catálogo de Espaçonaves</div>
                    <nav>
                        <Link href={"/"}>Inicio</Link>
                        <Link href={"/spaceships"}>Espaçonaves</Link>
                        <Link href={"/categories"}>Categorias</Link>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
