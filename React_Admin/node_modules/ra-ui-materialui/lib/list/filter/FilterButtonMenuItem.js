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
exports.FilterButtonMenuItem = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var ra_core_1 = require("ra-core");
exports.FilterButtonMenuItem = react_1.forwardRef(function (props, ref) {
    var filter = props.filter, onShow = props.onShow;
    var resource = ra_core_1.useResourceContext(props);
    var handleShow = react_1.useCallback(function () {
        onShow({
            source: filter.props.source,
            defaultValue: filter.props.defaultValue,
        });
    }, [filter.props.defaultValue, filter.props.source, onShow]);
    return (React.createElement(MenuItem_1.default, { className: "new-filter-item", "data-key": filter.props.source, "data-default-value": filter.props.defaultValue, key: filter.props.source, onClick: handleShow, ref: ref },
        React.createElement(ra_core_1.FieldTitle, { label: filter.props.label, source: filter.props.source, resource: resource })));
});
exports.FilterButtonMenuItem.propTypes = {
    filter: prop_types_1.default.element.isRequired,
    onShow: prop_types_1.default.func.isRequired,
    resource: prop_types_1.default.string.isRequired,
};
