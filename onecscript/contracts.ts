import {Integer, Guid, InfoBase} from "../core";

export enum RunningModes{
	Enterprise//Режим запуска в режиме 1С:Предприятия
,	Designer//Режим запуска в режиме Конфигуратор
}//Режимы запуска 1С

export interface InfobaseId extends String {}

export interface InfobaseConfiguration extends InfoBase
{
	id: InfobaseId;//Уникальный идентификатор Информационной базы
	version: String;//Версия платформы 1с
	keys: String[];//массив дополнительных общих параметров командной строки для указания параметров запуска
}

export interface ScheduleTask{
	
	id: String;//Идентификатор регламентного задания
	description?: String//Описание регламентного задания
	infobaseId: InfobaseId;//Идентификатор информационной базы на которой запускается задание
	param: String;//C <строка текста> — передача параметра в конфигурацию. 
	isActive: boolean;//Активно ли задание в текущий момент
	runningMode: RunningModes;//Режим запуска 1с предприятия
}


export interface Run1cConfig {
	
	infobaseConfigurations: InfobaseConfiguration[];//массив конфигураций регламентных заданий
	
	scheduleTasks: ScheduleTask[];//массив описаний регламентных заданий
	
}