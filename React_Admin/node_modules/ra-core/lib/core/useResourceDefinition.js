"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResourceDefinition = void 0;
var react_redux_1 = require("react-redux");
var merge_1 = __importDefault(require("lodash/merge"));
var reducer_1 = require("../reducer");
var useResourceContext_1 = require("./useResourceContext");
var react_1 = require("react");
/**
 * Hook which returns the definition of the requested resource
 */
exports.useResourceDefinition = function (props) {
    var resource = useResourceContext_1.useResourceContext(props);
    var resources = react_redux_1.useSelector(reducer_1.getResources);
    var hasCreate = props.hasCreate, hasEdit = props.hasEdit, hasList = props.hasList, hasShow = props.hasShow;
    var definition = react_1.useMemo(function () {
        var definitionFromRedux = resources.find(function (r) { return (r === null || r === void 0 ? void 0 : r.name) === resource; });
        return merge_1.default({}, definitionFromRedux, {
            hasCreate: hasCreate,
            hasEdit: hasEdit,
            hasList: hasList,
            hasShow: hasShow,
        });
    }, [resource, resources, hasCreate, hasEdit, hasList, hasShow]);
    return definition;
};
