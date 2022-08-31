export type Message = {
    id: string,
    type: string,
    message: string
}

export type CloseFunction = (messageId: string) => void