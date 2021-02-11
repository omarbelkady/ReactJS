"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenObject = exports.queryParameters = exports.fetchJson = exports.createHeadersFromOptions = void 0;
var HttpError_1 = __importDefault(require("./HttpError"));
var query_string_1 = require("query-string");
exports.createHeadersFromOptions = function (options) {
    var requestHeaders = (options.headers ||
        new Headers({
            Accept: 'application/json',
        }));
    if (!requestHeaders.has('Content-Type') &&
        !(options && (!options.method || options.method === 'GET')) &&
        !(options && options.body && options.body instanceof FormData)) {
        requestHeaders.set('Content-Type', 'application/json');
    }
    if (options.user && options.user.authenticated && options.user.token) {
        requestHeaders.set('Authorization', options.user.token);
    }
    return requestHeaders;
};
exports.fetchJson = function (url, options) {
    if (options === void 0) { options = {}; }
    var requestHeaders = exports.createHeadersFromOptions(options);
    return fetch(url, __assign(__assign({}, options), { headers: requestHeaders }))
        .then(function (response) {
        return response.text().then(function (text) { return ({
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            body: text,
        }); });
    })
        .then(function (_a) {
        var status = _a.status, statusText = _a.statusText, headers = _a.headers, body = _a.body;
        var json;
        try {
            json = JSON.parse(body);
        }
        catch (e) {
            // not json, no big deal
        }
        if (status < 200 || status >= 300) {
            return Promise.reject(new HttpError_1.default((json && json.message) || statusText, status, json));
        }
        return Promise.resolve({ status: status, headers: headers, body: body, json: json });
    });
};
exports.queryParameters = query_string_1.stringify;
var isValidObject = function (value) {
    if (!value) {
        return false;
    }
    var isArray = Array.isArray(value);
    var isBuffer = typeof Buffer !== 'undefined' && Buffer.isBuffer(value);
    var isObject = Object.prototype.toString.call(value) === '[object Object]';
    var hasKeys = !!Object.keys(value).length;
    return !isArray && !isBuffer && isObject && hasKeys;
};
exports.flattenObject = function (value, path) {
    var _a;
    if (path === void 0) { path = []; }
    if (isValidObject(value)) {
        return Object.assign.apply(Object, __spreadArrays([{}], Object.keys(value).map(function (key) {
            return exports.flattenObject(value[key], path.concat([key]));
        })));
    }
    else {
        return path.length ? (_a = {}, _a[path.join('.')] = value, _a) : value;
    }
};
