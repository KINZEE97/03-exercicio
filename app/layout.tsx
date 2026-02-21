import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: "Spaceships App",
    description: "App created through the lessons of OneBitCode",
    creator: "Alizon Kingslen",
    openGraph: {
        title: "Spaceships App",
        description: "App created through the lessons of OneBitCode",
        siteName: "03-exercicio-spaceships-starwars.vercel.app",
        creators: "Alizon Kingslen",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.variable} ${roboto.className}`}>
                <div className="container">
                    <header className="header">
                        <Link href={"/"} className="logo">
                            EXERCÍCIO 3 - CATÁLOGO DE ESPAÇONAVES
                        </Link>
                        <nav className="nav-bar">
                            <Link href={"/"}>Início</Link> {" | "}
                            <Link href={"/spaceships"}>Espaçonaves</Link>{" "}
                            {" | "}
                            <Link href={"/categories"}>Categorias</Link>
                        </nav>
                    </header>
                    {children}
                </div>
            </body>
        </html>
    );
}
