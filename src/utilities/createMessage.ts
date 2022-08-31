enum types {
    Error = "ERROR",
    Success = "SUCCESS",
    Info = "INFO",
    Warning = "WARNING"
}

export function createMessage(code: string){
    let newMessage
    switch (code) {
        case "DELTAGFAIL":
            newMessage = {
                id: Math.random().toString(),
                message: "Não foi possivel excluir esta tag",
                type: types.Error
            }
            break;
        case "DELTAGSUCE":
            newMessage = {
                id: Math.random().toString(),
                message: "Tag excluida com sucesso",
                type: types.Success
            }
            break;
        case "CRETAGSUCE":
            newMessage = {
                id: Math.random().toString(),
                message: "Tag criada com sucesso",
                type: types.Info
            }
            break;
        case "CRETAGFAIL":
            newMessage = {
                id: Math.random().toString(),
                message: "Não foi possível criar a tag",
                type: types.Error
            }
            break;
        case "EDITAGSUCE":
            newMessage = {
                id: Math.random().toString(),
                message: "Tag editada com sucesso",
                type: types.Info
            }
            break;
        case "EDITAGFAIL":
            newMessage = {
                id: Math.random().toString(),
                message: "Não foi possível editar a tag",
                type: types.Error
            }
            break;
        default:
            break;
    }
    return newMessage
}