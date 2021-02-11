"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../core");
function validateResponseFormat(response, type, logger // eslint-disable-line no-console
) {
    if (logger === void 0) { logger = console.error; }
    if (!response) {
        logger("The dataProvider returned an empty response for '" + type + "'.");
        throw new Error('ra.notification.data_provider_error');
    }
    if (!response.hasOwnProperty('data')) {
        logger("The response to '" + type + "' must be like { data: ... }, but the received response does not have a 'data' key. The dataProvider is probably wrong for '" + type + "'.");
        throw new Error('ra.notification.data_provider_error');
    }
    if (core_1.fetchActionsWithArrayOfRecordsResponse.includes(type) &&
        !Array.isArray(response.data)) {
        logger("The response to '" + type + "' must be like { data : [...] }, but the received data is not an array. The dataProvider is probably wrong for '" + type + "'");
        throw new Error('ra.notification.data_provider_error');
    }
    if (core_1.fetchActionsWithArrayOfIdentifiedRecordsResponse.includes(type) &&
        Array.isArray(response.data) &&
        response.data.length > 0 &&
        !response.data[0].hasOwnProperty('id')) {
        logger("The response to '" + type + "' must be like { data : [{ id: 123, ...}, ...] }, but the received data items do not have an 'id' key. The dataProvider is probably wrong for '" + type + "'");
        throw new Error('ra.notification.data_provider_error');
    }
    if (core_1.fetchActionsWithRecordResponse.includes(type) &&
        !response.data.hasOwnProperty('id')) {
        logger("The response to '" + type + "' must be like { data: { id: 123, ... } }, but the received data does not have an 'id' key. The dataProvider is probably wrong for '" + type + "'");
        throw new Error('ra.notification.data_provider_error');
    }
    if (core_1.fetchActionsWithTotalResponse.includes(type) &&
        !response.hasOwnProperty('total')) {
        logger("The response to '" + type + "' must be like  { data: [...], total: 123 }, but the received response does not have a 'total' key. The dataProvider is probably wrong for '" + type + "'");
        throw new Error('ra.notification.data_provider_error');
    }
}
exports.default = validateResponseFormat;
