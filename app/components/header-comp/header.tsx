'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

interface HeaderProps {
    brand: string;
    version: number;
}

export default function Header({brand, version}: HeaderProps) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js').then((Bootstrap) => {
            console.log('Bootstrap JS wurde geladen:', Bootstrap);
        }).catch(err => console.error('Fehler beim Laden von Bootstrap JS:', err));
    }, []);

    return (
        <div className="dropdown">
            <header style={{height: '6vh'}} className="bg-primary text-white">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
                    <a className="navbar-brand" href="#">
                        {brand} v{version}.0
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </nav>
            </header>
        </div>
    );
}