var Log = /** @class */ (function () {
    function Log(text, logType) {
        if (logType === void 0) { logType = logTypes.standard; }
        this.timestamp = 0;
        this.type = logTypes.standard;
        this.message = '';
        this.timestamp = Math.floor(Date.now() / 1000);
        this.type = logType;
        this.message = text;
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
