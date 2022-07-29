export declare class Log {
    logType: string;
    text: string;
    timestamp: number;
    constructor(text: string, logType?: string);
}
export declare const logTypes: {
    standard: string;
    error: string;
    info: string;
};
