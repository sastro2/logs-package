import { Log, logTypes } from './log.js';

export class LogManager {
  private username: string = '';
  private password: string = '';
  private send: Function = this.sendLogs;
  private logs: Log[] = [];

  constructor(username: string, password: string, send?: Function) {
    this.username = username;
    this.password = password;
    this.send = send ? send : this.sendLogs;
    console.log(`created log with ${username} and ${password}`);
  }

  addLog(log: Log) {
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
  }

  // send all unsent logs
  sendLogs() {
    console.log(this.logs, 'sent');
    this.logs = [];
  }
}
