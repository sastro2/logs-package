var Log = /** @class */ (function () {
    function Log(text, logType) {
        if (logType === void 0) { logType = logTypes.standard; }
        this.logType = logTypes.standard;
        this.text = '';
        this.timestamp = 0;
        this.text = text;
        this.logType = logType;
        this.timestamp = Date.now() / 1000;
        console.log(this, 'created');
    }
    return Log;
}());
export { Log };
export var logTypes = {
    standard: 'standard',
    error: 'error',
    info: 'info',
};
