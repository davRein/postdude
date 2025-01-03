'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header-comp/header';
import Footer from "@/app/components/footer-comp/footer";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>Meine Next.js Seite mit Bootstrap</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body>
        <Header brand={"Postdude"} version={1}/>
        <Footer year={2025} company={"Syborg OHG"}/>
        </body>
        </html>
    );
}