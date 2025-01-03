declare module 'bootstrap/dist/js/bootstrap.bundle.min.js' {
    const bootstrap: {
        Tooltip: unknown;
        Modal: unknown;
        Popover: unknown;
        [key: string]: unknown; // Für alle anderen dynamischen Eigenschaften
    };
    export = bootstrap;
}