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
      // TODO
      // check if log needs to be sent immediately and proceed accordingly
      // if yes add the log and send it otherwhise just add it
      console.log('custom log type', log.logType);
      return;
    }

    if (log.logType === 'error') {
      // TODO
      // built in log types that need to be sent immediately
      // adds log and sends it without user having to call sendLogs method
      console.log('send immediately');
      this.logs.push(log);
      this.sendLogs();
      return;
    }

    // built in log types that dont need to be sent immediately
    this.logs.push(log);
    console.log(log, 'added');
  }

  // TODO
  // generate id and timestamp and send all unsent logs
  // request body should contain id, timestamp, and logs array as json
  sendLogs() {
    console.log(this.logs, 'sent');
    this.logs = [];
  }
}
