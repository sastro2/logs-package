export class Log {
  timestamp: number = 0;
  type: string = logTypes.standard;
  message: string = '';

  constructor(text: string, logType: string = logTypes.standard) {
    this.timestamp = Math.floor(Date.now() / 1000);
    this.type = logType;
    this.message = text;
    console.log(this, 'created');
  }
}

export const logTypes = {
  standard: 'standard',
  error: 'error',
  info: 'info',
};
