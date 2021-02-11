"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var cachedRequests_1 = __importDefault(require("./cachedRequests"));
var expanded_1 = __importDefault(require("./expanded"));
var ids_1 = __importDefault(require("./ids"));
var loadedOnce_1 = __importDefault(require("./loadedOnce"));
var params_1 = __importDefault(require("./params"));
var selectedIds_1 = __importDefault(require("./selectedIds"));
var total_1 = __importDefault(require("./total"));
var defaultReducer = function () { return null; };
exports.default = redux_1.combineReducers({
    /**
     * ts-jest does some aggressive module mocking when unit testing reducers individually.
     * To avoid 'No reducer provided for key "..."' warnings,
     * we pass default reducers. Sorry for legibility.
     *
     * @see https://stackoverflow.com/questions/43375079/redux-warning-only-appearing-in-tests
     */
    cachedRequests: cachedRequests_1.default || defaultReducer,
    expanded: expanded_1.default || defaultReducer,
    ids: ids_1.default || defaultReducer,
    loadedOnce: loadedOnce_1.default || defaultReducer,
    params: params_1.default || defaultReducer,
    selectedIds: selectedIds_1.default || defaultReducer,
    total: total_1.default || defaultReducer,
});
