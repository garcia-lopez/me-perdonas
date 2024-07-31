export function generateCoordinates(buttonWidth, buttonHeight) {
    const x = Math.random() * (window.innerWidth - buttonWidth) - 85;
    const y = Math.random() * (window.innerHeight - buttonHeight) - 48;

    return { x, y };
}