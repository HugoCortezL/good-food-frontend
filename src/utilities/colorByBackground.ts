export function colorByBackground(background: string): string {
    const luminance = (0.299 * parseInt(background.slice(1, 3), 16) + 0.587 * parseInt(background.slice(3, 5), 16) + 0.114 * parseInt(background.slice(5), 16)) / 255;
    let color = "#FFFFFF"
    if (luminance > 0.5) {
        color = "#000000"
    }
    return color
}