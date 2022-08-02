var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import fetch from 'node-fetch';
import { logTypes } from './log.js';
var LogManager = /** @class */ (function () {
    function LogManager(username, password, projectId, send) {
        this.username = '';
        this.password = '';
        this.projectId = 0;
        this.send = this.sendLogs;
        this.logs = [];
        this.username = username;
        this.password = password;
        this.projectId = projectId;
        this.send = send ? send : this.sendLogs;
        console.log("created log with ".concat(username, " and ").concat(password));
    }
    LogManager.prototype.addLog = function (log) {
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
    };
    // TODO
    // generate id and timestamp and send all unsent logs
    // request body should contain UserJourneyId, timestamp, projectId and logs array as json
    LogManager.prototype.sendLogs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.logs === []) {
                            console.log('no logs to send');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, fetch("http://localhost:5134/Logs/123", {
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
                            })];
                    case 1:
                        response = _a.sent();
                        console.log(this.logs, 'sent', response);
                        this.logs = [];
                        return [2 /*return*/];
                }
            });
        });
    };
    return LogManager;
}());
export { LogManager };
