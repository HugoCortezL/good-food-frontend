export function minutesToTimeString(minutes: number): string {
    let result = ""
    if(minutes > 60) {
        result += String(Math.trunc(minutes / 60)) + "h e "
    }
    result += String(Math.trunc(minutes % 60)) + "min"
    return result
}