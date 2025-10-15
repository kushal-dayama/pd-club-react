export function asset(path: string) {
    // Ensure no leading slash then prepend Vite base URL
    const cleaned = path.replace(/^\//, "");
    // import.meta.env.BASE_URL is injected by Vite and reflects `base` config
    return `${import.meta.env.BASE_URL || '/'}${cleaned}`;
}
