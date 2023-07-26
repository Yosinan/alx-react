export  function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Holberton School';
    }
    return 'Holberton School main dashboard';
}

export function getFullYear() {
    return new Date().getFullYear();
}