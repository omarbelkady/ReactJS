"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResultFromCache = exports.canReplyWithCache = void 0;
var get_1 = __importDefault(require("lodash/get"));
exports.canReplyWithCache = function (type, payload, resourceState) {
    var now = new Date();
    switch (type) {
        case 'getList':
            return (get_1.default(resourceState, [
                'list',
                'cachedRequests',
                JSON.stringify(payload),
                'validity',
            ]) > now);
        case 'getOne':
            return (resourceState &&
                resourceState.validity &&
                resourceState.validity[payload.id] > now);
        case 'getMany':
            return (resourceState &&
                resourceState.validity &&
                payload.ids.every(function (id) { return resourceState.validity[id] > now; }));
        default:
            return false;
    }
};
exports.getResultFromCache = function (type, payload, resourceState) {
    switch (type) {
        case 'getList': {
            var data_1 = resourceState.data;
            var requestSignature = JSON.stringify(payload);
            var cachedRequest = resourceState.list.cachedRequests[requestSignature];
            return {
                data: cachedRequest.ids.map(function (id) { return data_1[id]; }),
                total: cachedRequest.total,
            };
        }
        case 'getOne':
            return { data: resourceState.data[payload.id] };
        case 'getMany':
            return {
                data: payload.ids.map(function (id) { return resourceState.data[id]; }),
            };
        default:
            throw new Error('cannot reply with cache for this method');
    }
};
