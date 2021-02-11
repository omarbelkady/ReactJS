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
var React = __importStar(require("react"));
var react_1 = require("react");
var inflection_1 = __importDefault(require("inflection"));
var ra_core_1 = require("ra-core");
var ListView_1 = __importDefault(require("./ListView"));
var listFieldTypes_1 = __importDefault(require("./listFieldTypes"));
/**
 * List component rendering a <Datagrid> based on the result of the
 * dataProvider.getList() call.
 *
 * The result (choice and type of columns) isn't configurable, but the
 * <ListGuesser> outputs the <Datagrid> it has guessed to the console so that
 * developers can start from there.
 *
 * To be used as the list prop of a <Resource>.
 *
 * @example
 *
 * import { Admin, Resource, ListGuesser } from 'react-admin';
 *
 * const App = () => (
 *     <Admin dataProvider={myDataProvider}>
 *         <Resource name="posts" list={ListGuesser} />
 *     </Admin>
 * );
 */
var ListGuesser = function (props) {
    var controllerProps = ra_core_1.useListController(props);
    return (React.createElement(ra_core_1.ListContextProvider, { value: controllerProps },
        React.createElement(ListViewGuesser, __assign({}, props, controllerProps))));
};
var ListViewGuesser = function (props) {
    var ids = props.ids, data = props.data;
    var resource = ra_core_1.useResourceContext(props);
    var _a = react_1.useState(null), inferredChild = _a[0], setInferredChild = _a[1];
    react_1.useEffect(function () {
        if (ids.length > 0 && data && !inferredChild) {
            var inferredElements = ra_core_1.getElementsFromRecords(ids.map(function (id) { return data[id]; }), listFieldTypes_1.default);
            var inferredChild_1 = new ra_core_1.InferredElement(listFieldTypes_1.default.table, null, inferredElements);
            process.env.NODE_ENV !== 'production' &&
                // eslint-disable-next-line no-console
                console.log("Guessed List:\n\nexport const " + inflection_1.default.capitalize(inflection_1.default.singularize(resource)) + "List = props => (\n    <List {...props}>\n" + inferredChild_1.getRepresentation() + "\n    </List>\n);");
            setInferredChild(inferredChild_1.getElement());
        }
    }, [data, ids, inferredChild, resource]);
    return React.createElement(ListView_1.default, __assign({}, props), inferredChild);
};
ListViewGuesser.propTypes = ListView_1.default.propTypes;
exports.default = ListGuesser;
