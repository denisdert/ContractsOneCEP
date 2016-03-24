import {Integer, Guid} from "../core";

export namespace test1c.any.test.rpc{
    export interface Request{
        delay?: Integer;//Задержка в обработке сообщения
        extendedInfo?: string;//Возвращаемая дополнительная информация
        error?: string;//Возвращаемые ошибки
    } extends any
    export interface Response{
        КлючЗадания: string;//Процесс который обработал задание
    } extends Request
}//тестовое сообщение