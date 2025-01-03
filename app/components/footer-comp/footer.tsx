'use client'; // Wichtig für Client-Komponenten

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface FooterProps {
    year: number;
    company: string;
}

export default function Footer({ year, company }: FooterProps) {
    return (
        <footer style={{ height: '10vh' }} className="bg-dark text-white d-flex justify-content-center align-items-center">
            <p className="mb-0">© {year} {company}. Alle Rechte vorbehalten.</p>
        </footer>
    );
}
