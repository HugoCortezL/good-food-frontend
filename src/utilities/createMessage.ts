export function createMessage(message: string, type: string){
    const newMessage = {
        id: Math.random().toString(),
        message: message,
        type: type
    }
    return newMessage
}