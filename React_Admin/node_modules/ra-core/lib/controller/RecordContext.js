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
exports.useRecordContext = exports.usePickRecordContext = exports.RecordContextProvider = exports.RecordContext = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var pick_1 = __importDefault(require("lodash/pick"));
/**
 * Context to store the current record.
 *
 * Use the useRecordContext() hook to read the context. That's what the Edit and Show components do in react-admin.
 *
 * @example
 *
 * import { useEditController, EditContext } from 'ra-core';
 *
 * const Edit = props => {
 *     const { record }= useEditController(props);
 *     return (
 *         <RecordContextProvider value={record}>
 *             ...
 *         </RecordContextProvider>
 *     );
 * };
 */
exports.RecordContext = react_1.createContext(undefined);
exports.RecordContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React.createElement(exports.RecordContext.Provider, { value: value }, children));
};
exports.RecordContext.displayName = 'RecordContext';
exports.usePickRecordContext = function (context) {
    var value = react_1.useMemo(function () { return pick_1.default(context, ['record']); }, [context.record]); // eslint-disable-line
    return value;
};
/**
 * Hook to read the record from a RecordContext.
 *
 * Must be used within a <RecordContext> such as provided by the <EditContextProvider>
 * (e.g. as a descendent of <Edit> or <EditBase>) or within a <ShowContextProvider>
 * (e.g. as a descendent of <Show> or <ShowBase>)
 *
 * @returns {Record} The record context
 */
exports.useRecordContext = function (props) {
    // Can't find a way to specify the RecordType when CreateContext is declared
    // @ts-ignore
    var context = react_1.useContext(exports.RecordContext);
    if (!context) {
        // As the record could very well be undefined because not yet loaded
        // We don't display a deprecation warning yet
        // @deprecated - to be removed in 4.0
        return props;
    }
    return context;
};
