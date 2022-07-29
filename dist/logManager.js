import { logTypes } from './log.js';
var LogManager = /** @class */ (function () {
    function LogManager(username, password, send) {
        this.username = '';
        this.password = '';
        this.send = this.sendLogs;
        this.logs = [];
        this.username = username;
        this.password = password;
        this.send = send ? send : this.sendLogs;
        console.log("created log with ".concat(username, " and ").concat(password));
    }
    LogManager.prototype.addLog = function (log) {
        if (!(log.logType in logTypes)) {
            // check if log needs to be sent immediately and proceed accordingly
            console.log('custom log type', log.logType);
            return;
        }
        if (log.logType === 'error') {
            // built in log types that need to be sent immediately
            console.log('send immediately');
            return;
        }
        // built in log types that dont need to be sent immediately
        this.logs.push(log);
        console.log(log, 'added');
    };
    // send all unsent logs
    LogManager.prototype.sendLogs = function () {
        console.log(this.logs, 'sent');
        this.logs = [];
    };
    return LogManager;
}());
export { LogManager };
