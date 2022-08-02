export declare class Log {
    timestamp: number;
    type: string;
    message: string;
    constructor(text: string, logType?: string);
}
export declare const logTypes: {
    standard: string;
    error: string;
    info: string;
};
