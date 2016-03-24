import {Integer, Guid, InfoBase} from "../core";

export interface InfobaseId extends String {}

export interface InfobaseConfiguration extends InfoBase
{
	id: InfobaseId;//Уникальный идентификатор Информационной базы
	version: String;//Версия платформы 1с
	keys: String[];//массив дополнительных общих параметров командной строки для указания параметров запуска
}

export interface ScheduleTask{
	
	id: String;//Идентификатор регламентного задания
	infobaseId: InfobaseId;//Идентификатор информационной базы на которой запускается задание
	
	param: String;//C <строка текста> — передача параметра в конфигурацию. 

}


export interface Run1cConfig {
	
	infobaseConfigurations: InfobaseConfiguration[];//массив конфигураций регламентных заданий
	
	scheduleTasks: ScheduleTask[];//массив описаний регламентных заданий
	
}