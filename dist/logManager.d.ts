import { Log } from './log.js';
export declare class LogManager {
    private username;
    private password;
    private projectId;
    private send;
    private logs;
    constructor(username: string, password: string, projectId: number, send?: Function);
    addLog(log: Log): void;
    sendLogs(): Promise<void>;
}
