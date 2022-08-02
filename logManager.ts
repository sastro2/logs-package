import fetch from 'node-fetch';
import { Log, logTypes } from './log.js';

export class LogManager {
  private username: string = '';
  private password: string = '';
  private projectId: number = 0;
  private send: Function = this.sendLogs;
  private logs: Log[] = [];

  constructor(
    username: string,
    password: string,
    projectId: number,
    send?: Function,
  ) {
    this.username = username;
    this.password = password;
    this.projectId = projectId;
    this.send = send ? send : this.sendLogs;
    console.log(`created log with ${username} and ${password}`);
  }

  addLog(log: Log) {
    if (!(log.type in logTypes)) {
      // TODO
      // check if log needs to be sent immediately and proceed accordingly
      // if yes add the log and send it otherwhise just add it
      console.log('custom log type', log.type);
      this.logs.push(log);
      return;
    }

    if (log.type === 'error') {
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
  // generate random id instead of using 1234567890
  async sendLogs() {
    if (this.logs === []) {
      console.log('no logs to send');
      return;
    }

    const response = await fetch(`http://localhost:5134/Logs/123`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: '1234567890',
        projectId: this.projectId,
        timestamp: Math.floor(Date.now() / 1000),
        logs: this.logs,
      }),
    });
    console.log(this.logs, 'sent', response);
    this.logs = [];
  }
}
