

export type CronInterface= {
    (args?: any | ""): void;
    option?:ScheduleOptions
}
  
export type CronReturn= {
    status:boolean
    data:any
    error:string |unknown
}

export type CronEventType = {
    emits: 'CRON-CREATE' | "CRON-ERROR"
}

export interface ScheduleOptions {
    /**
     * A boolean to set if the created task is scheduled.
     *
     * Defaults to `true`
     */
    scheduled?: boolean | undefined;
    /**
     * The timezone that is used for job scheduling
     */
    timezone?: string;
    /**
     * Specifies whether to recover missed executions instead of skipping them.
     *
     * Defaults to `false`
     */
    recoverMissedExecutions?: boolean;
    /**
     * The schedule name
     */
    name?: string;
    /**
     * Execute task immediately after creation
     */
    runOnInit?: boolean;
}