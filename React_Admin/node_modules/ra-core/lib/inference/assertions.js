"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.valuesAreObject = exports.isObject = exports.valuesAreDateString = exports.isDateString = exports.valuesAreDate = exports.isDate = exports.valuesAreArray = exports.isArray = exports.valuesAreHtml = exports.isHtml = exports.valuesAreString = exports.isString = exports.valuesAreBoolean = exports.isBoolean = exports.valuesAreInteger = exports.isInteger = exports.valuesAreNumeric = exports.isNumeric = void 0;
var parse_1 = __importDefault(require("date-fns/parse"));
exports.isNumeric = function (value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
};
exports.valuesAreNumeric = function (values) { return values.every(exports.isNumeric); };
exports.isInteger = function (value) { return Number.isInteger(value); };
exports.valuesAreInteger = function (values) { return values.every(exports.isInteger); };
exports.isBoolean = function (value) { return typeof value === 'boolean'; };
exports.valuesAreBoolean = function (values) { return values.every(exports.isBoolean); };
exports.isString = function (value) { return typeof value === 'string'; };
exports.valuesAreString = function (values) { return values.every(exports.isString); };
var HtmlRegexp = /<([A-Z][A-Z0-9]*)\b[^>]*>(.*?)<\/\1>/i;
exports.isHtml = function (value) { return HtmlRegexp.test(value); };
exports.valuesAreHtml = function (values) { return values.every(exports.isHtml); };
exports.isArray = function (value) { return Array.isArray(value); };
exports.valuesAreArray = function (values) { return values.every(exports.isArray); };
exports.isDate = function (value) { return value instanceof Date; };
exports.valuesAreDate = function (values) { return values.every(exports.isDate); };
exports.isDateString = function (value) {
    return typeof value === 'string' && !isNaN(parse_1.default(value).getDate());
};
exports.valuesAreDateString = function (values) {
    return values.every(exports.isDateString);
};
exports.isObject = function (value) {
    return Object.prototype.toString.call(value) === '[object Object]';
};
exports.valuesAreObject = function (values) { return values.every(exports.isObject); };
