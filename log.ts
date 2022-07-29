export class Log {
  logType: string = logTypes.standard;
  text: string = '';
  timestamp: number = 0;

  constructor(text: string, logType: string = logTypes.standard) {
    this.text = text;
    this.logType = logType;
    this.timestamp = Date.now() / 1000;
    console.log(this, 'created');
  }
}

export const logTypes = {
  standard: 'standard',
  error: 'error',
  info: 'info',
};
