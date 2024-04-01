import cron from "node-cron";
import { CronInterface, CronReturn,ScheduleOptions } from "../core/dto/cron.dto";
import  {EventEmitter} from 'node:events'
import { configServer } from "../configServer/configServer";

/**
 * @emits CRON-CREATE
 * @emits CRON-ERROR
 */
export const CronEvents:EventEmitter = new EventEmitter().setMaxListeners(configServer.emmiter_max)

/**
 * Função para agendar uma tarefa cron.
 * @param time string no formato HH:mm para especificar o horário da tarefa.
 * @param callback função de callback que será executada quando a tarefa for acionada.
 * @param args argumentos opcionais que serão passados para a função de callback.
 * @returns true se o agendamento for bem-sucedido, false caso contrário.
 */
export async function jobTime(time:string, callback:CronInterface, args?:any, options?:ScheduleOptions): Promise<CronReturn> {
  let array_cron = ["*", "*", "*", "*", "*"];

  try {
    const regexTime = /^([0-2]\d):([0-5]\d)$/g;
    if (!regexTime.test(time)) throw new Error("Formato invalido");

    const hora_prepare = time.split(":").reverse();
    
    const cron_string = array_cron .map((time, index) => {
        return hora_prepare[index] ?? "*";
      }).join(" ");
    
    const result = cron.schedule(cron_string, () => callback(args ?? ""), options);    
    CronEvents.emit('CRON-CREATE', args)
    
    return {
      status:true,
      data: args,
      error:null
    }

  } catch (err) {
      CronEvents.emit('CRON-ERROR', err)
      
      return {
        status:false,
        data: args,
        error: 'Formato Inválido'
      }
  }
}

