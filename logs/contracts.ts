export interface Integer extends Number {}
export interface Guid extends String {}

export enum Results{
    ВСОтвет_Обработано,
    ВСОтвет_ОбработаноИНуженОтвет,
    ВСОтвет_НеОбработано,
    ВСОтвет_ПоставитьВОчередь,
    ВСОтвет_ОстановитьОбработку
}

export enum Actions{
    Ack,
    Reject,
    Requeue,
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
    };//Общая часть сообщения
    
    input: {
        routingKey: string;//топик получаемого сообщения
        payload: any;//сообщение json
        countBinaryFiles: Integer;//количество бинарных файлов
        correlationId: Guid;//ID получаемого сообщения
    };//Входящее сообщение
    
    output?: {
        payload: any;//сообщение json
        statusCode: Integer;//код возврата сообщения
        countBinaryFiles: Integer;//количество возвращаемых бинарных файлов
    };//Наш ответ на rpc сообщение
}//Логирование входящего сообщения RabbitMQ

export interface RabbitOutput {
    common:{
        infobase: InfoBase;
        correlationId: Guid;//ID отправлемого сообщения
        exception?: string;//Ошибки которые возникают при отправке/обработке сообщения
        countTicks: Integer;//Количество секунд которые затратилось на отправку сообщения
    };//Общая часть сообщения
    
    output: {
        routingKey: string;//топик отправляемого сообщения
        exchange: string;//имя обменника на которого отправляется сообщение
        payload: any;//Отправляемое сообщение в формате json
        countBinaryFiles: Integer;//количество отправляемых бинарных файлов
        timeout?: Integer;//заданный таймаут для ожидания ответа на rpc сообщение 
    }//Отправляемое сообщение
    
    input?: {
        payload: any;//Получаемое сообщение в формате json
        statusCode: Integer;
        error?: string;//Ошибки которая нам возвращает система в которую мы отправляем сообщение
        countBinaryFiles: Integer;//количество получаемых бинарных файлов
        correlationId: Guid;//ID сообщения которое пришло в ответ
        countTicks: Integer;//Количество секунд которое обрабатывалось сообщение принимающей стороной
    }//Получаемое сообщение (ответ на rpc)
}//Логирование исходящего сообщения RabbitMQ