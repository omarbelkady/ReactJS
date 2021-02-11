"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPossibleReferences = exports.getReferenceResource = exports.getResources = exports.getPossibleReferenceValues = void 0;
var redux_1 = require("redux");
var resource_1 = __importStar(require("./resource"));
var loading_1 = __importDefault(require("./loading"));
var notifications_1 = __importDefault(require("./notifications"));
var references_1 = __importStar(require("./references"));
var ui_1 = __importDefault(require("./ui"));
var customQueries_1 = __importDefault(require("./customQueries"));
var defaultReducer = function () { return null; };
exports.default = redux_1.combineReducers({
    /**
     * ts-jest does some aggressive module mocking when unit testing reducers individually.
     * To avoid 'No reducer provided for key "..."' warnings,
     * we pass default reducers. Sorry for legibility.
     *
     * @see https://stackoverflow.com/questions/43375079/redux-warning-only-appearing-in-tests
     */
    resources: resource_1.default || defaultReducer,
    customQueries: customQueries_1.default || defaultReducer,
    loading: loading_1.default || defaultReducer,
    notifications: notifications_1.default || defaultReducer,
    references: references_1.default || defaultReducer,
    ui: ui_1.default || defaultReducer,
});
exports.getPossibleReferenceValues = function (state, props) {
    return references_1.getPossibleReferenceValues(state.references, props);
};
exports.getResources = function (state) { return resource_1.getResources(state.resources); };
exports.getReferenceResource = function (state, props) {
    return resource_1.getReferenceResource(state.resources, props);
};
var references_2 = require("./references");
Object.defineProperty(exports, "getPossibleReferences", { enumerable: true, get: function () { return references_2.getPossibleReferences; } });
