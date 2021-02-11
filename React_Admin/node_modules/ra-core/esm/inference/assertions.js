import parseDate from 'date-fns/parse';
export var isNumeric = function (value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
};
export var valuesAreNumeric = function (values) { return values.every(isNumeric); };
export var isInteger = function (value) { return Number.isInteger(value); };
export var valuesAreInteger = function (values) { return values.every(isInteger); };
export var isBoolean = function (value) { return typeof value === 'boolean'; };
export var valuesAreBoolean = function (values) { return values.every(isBoolean); };
export var isString = function (value) { return typeof value === 'string'; };
export var valuesAreString = function (values) { return values.every(isString); };
var HtmlRegexp = /<([A-Z][A-Z0-9]*)\b[^>]*>(.*?)<\/\1>/i;
export var isHtml = function (value) { return HtmlRegexp.test(value); };
export var valuesAreHtml = function (values) { return values.every(isHtml); };
export var isArray = function (value) { return Array.isArray(value); };
export var valuesAreArray = function (values) { return values.every(isArray); };
export var isDate = function (value) { return value instanceof Date; };
export var valuesAreDate = function (values) { return values.every(isDate); };
export var isDateString = function (value) {
    return typeof value === 'string' && !isNaN(parseDate(value).getDate());
};
export var valuesAreDateString = function (values) {
    return values.every(isDateString);
};
export var isObject = function (value) {
    return Object.prototype.toString.call(value) === '[object Object]';
};
export var valuesAreObject = function (values) { return values.every(isObject); };
