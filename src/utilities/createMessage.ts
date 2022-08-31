enum types {
    Error = "ERROR",
    Success = "SUCCESS",
    Info = "INFO",
    Warning = "WARNING"
}

export function createMessage(code: string){
    let newMessage
    switch (code) {
        case "TAG04001":
            newMessage = {
                id: Math.random().toString(),
                message: "Não foi possivel excluir esta tag",
                type: types.Error
            }
            break;
        case "TAG01002":
            newMessage = {
                id: Math.random().toString(),
                message: "Tag excluida com sucesso",
                type: types.Success
            }
            break;
        case "TAG02003":
            newMessage = {
                id: Math.random().toString(),
                message: "Tag criada com sucesso",
                type: types.Info
            }
            break;
        case "TAG01004":
            newMessage = {
                id: Math.random().toString(),
                message: "Não foi possível criar a tag",
                type: types.Error
            }
            break;
        case "TAG02005":
            newMessage = {
                id: Math.random().toString(),
                message: "Tag editada com sucesso",
                type: types.Info
            }
            break;
        case "TAG04006":
            newMessage = {
                id: Math.random().toString(),
                message: "Não foi possível editar a tag",
                type: types.Error
            }
            break;
        case "POR04001":
            newMessage = {
                id: Math.random().toString(),
                message: "Não foi possivel excluir esta porção",
                type: types.Error
            }
            break;
        case "POR01002":
            newMessage = {
                id: Math.random().toString(),
                message: "Porção excluida com sucesso",
                type: types.Success
            }
            break;
        case "POR02003":
            newMessage = {
                id: Math.random().toString(),
                message: "Porção criada com sucesso",
                type: types.Info
            }
            break;
        case "POR01004":
            newMessage = {
                id: Math.random().toString(),
                message: "Não foi possível criar a porção",
                type: types.Error
            }
            break;
        case "POR02005":
            newMessage = {
                id: Math.random().toString(),
                message: "Porção editada com sucesso",
                type: types.Info
            }
            break;
        case "POR04006":
            newMessage = {
                id: Math.random().toString(),
                message: "Não foi possível editar a porção",
                type: types.Error
            }
            break;
        default:
            break;
    }
    return newMessage
}