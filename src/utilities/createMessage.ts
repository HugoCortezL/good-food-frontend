/*
Formação:
XXX - Iniciais do tipo de dado
XX - Qual o tipo da mensagem (SUCESS = 01, INFO = 02, WARNING = 03, ERROR = 04) 
XXX - Qual o numero(texto) da menssagem de acordo com a quantidade de mensagem que o tipo de dado tem

*/

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
        case "ING04001":
            newMessage = {
                id: Math.random().toString(),
                message: "Não foi possivel excluir este ingrediente",
                type: types.Error
            }
            break;
        case "ING01002":
            newMessage = {
                id: Math.random().toString(),
                message: "Tngrediente excluido com sucesso",
                type: types.Success
            }
            break;
        case "ING02003":
            newMessage = {
                id: Math.random().toString(),
                message: "Ingrediente criado com sucesso",
                type: types.Info
            }
            break;
        case "ING01004":
            newMessage = {
                id: Math.random().toString(),
                message: "Não foi possível criar o ingrediente",
                type: types.Error
            }
            break;
        case "ING02005":
            newMessage = {
                id: Math.random().toString(),
                message: "Ingrediente editado com sucesso",
                type: types.Info
            }
            break;
        case "ING04006":
            newMessage = {
                id: Math.random().toString(),
                message: "Não foi possível editar o ingrediente",
                type: types.Error
            }
            break;
        default:
            break;
    }
    return newMessage
}