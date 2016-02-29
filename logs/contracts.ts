export enum Results{
    
}

export enum Actions{
    
}

export interface InfoBase {
    name: string;
    ref: string;
    srvr: string;
}

export interface RabbitInput {
    common:{
        infobase: InfoBase;
        keytask: string;
        result: Results;
        action: Actions;
    }//Общая часть сообщения
    
    input: {
        routingKey: string;//топик сообщения
        payload: any;//сообщение json
        countBinaryFiles: number;//количество бинарных файлов
    }//Входящее сообщение
}