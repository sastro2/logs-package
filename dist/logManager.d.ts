import { Log } from './log.js';
export declare class LogManager {
    private username;
    private password;
    private send;
    private logs;
    constructor(username: string, password: string, send?: Function);
    addLog(log: Log): void;
    sendLogs(): void;
}
