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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PureDatagridRow = void 0;
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("@material-ui/core");
var ra_core_1 = require("ra-core");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var DatagridCell_1 = __importDefault(require("./DatagridCell"));
var ExpandRowButton_1 = __importDefault(require("./ExpandRowButton"));
var computeNbColumns = function (expand, children, hasBulkActions) {
    return expand
        ? 1 + // show expand button
            (hasBulkActions ? 1 : 0) + // checkbox column
            react_1.default.Children.toArray(children).filter(function (child) { return !!child; }).length // non-null children
        : 0;
}; // we don't need to compute columns if there is no expand panel;
var defaultClasses = { expandIconCell: '', checkbox: '', rowCell: '' };
var DatagridRow = react_1.default.forwardRef(function (props, ref) {
    var basePath = props.basePath, children = props.children, _a = props.classes, classes = _a === void 0 ? defaultClasses : _a, className = props.className, expand = props.expand, hasBulkActions = props.hasBulkActions, hover = props.hover, id = props.id, onToggleItem = props.onToggleItem, record = props.record, rowClick = props.rowClick, selected = props.selected, style = props.style, selectable = props.selectable, rest = __rest(props, ["basePath", "children", "classes", "className", "expand", "hasBulkActions", "hover", "id", "onToggleItem", "record", "rowClick", "selected", "style", "selectable"]);
    var resource = ra_core_1.useResourceContext(props);
    var _b = ra_core_1.useExpanded(resource, id), expanded = _b[0], toggleExpanded = _b[1];
    var _c = react_1.useState(computeNbColumns(expand, children, hasBulkActions)), nbColumns = _c[0], setNbColumns = _c[1];
    react_1.useEffect(function () {
        // Fields can be hidden dynamically based on permissions;
        // The expand panel must span over the remaining columns
        // So we must recompute the number of columns to span on
        var newNbColumns = computeNbColumns(expand, children, hasBulkActions);
        if (newNbColumns !== nbColumns) {
            setNbColumns(newNbColumns);
        }
    }, [expand, nbColumns, children, hasBulkActions]);
    var history = react_router_dom_1.useHistory();
    var handleToggleExpand = react_1.useCallback(function (event) {
        toggleExpanded();
        event.stopPropagation();
    }, [toggleExpanded]);
    var handleToggleSelection = react_1.useCallback(function (event) {
        if (!selectable)
            return;
        onToggleItem(id);
        event.stopPropagation();
    }, [id, onToggleItem, selectable]);
    var handleClick = react_1.useCallback(function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var effect, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!rowClick)
                        return [2 /*return*/];
                    event.persist();
                    if (!(typeof rowClick === 'function')) return [3 /*break*/, 2];
                    return [4 /*yield*/, rowClick(id, basePath, record)];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = rowClick;
                    _b.label = 3;
                case 3:
                    effect = _a;
                    switch (effect) {
                        case 'edit':
                            history.push(ra_core_1.linkToRecord(basePath, id));
                            return [2 /*return*/];
                        case 'show':
                            history.push(ra_core_1.linkToRecord(basePath, id, 'show'));
                            return [2 /*return*/];
                        case 'expand':
                            handleToggleExpand(event);
                            return [2 /*return*/];
                        case 'toggleSelection':
                            handleToggleSelection(event);
                            return [2 /*return*/];
                        default:
                            if (effect)
                                history.push(effect);
                            return [2 /*return*/];
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [
        basePath,
        history,
        handleToggleExpand,
        handleToggleSelection,
        id,
        record,
        rowClick,
    ]);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(core_1.TableRow, __assign({ ref: ref, className: className, key: id, style: style, hover: hover, onClick: handleClick }, rest),
            expand && (react_1.default.createElement(core_1.TableCell, { padding: "none", className: classes.expandIconCell },
                react_1.default.createElement(ExpandRowButton_1.default, { classes: classes, expanded: expanded, onClick: handleToggleExpand, expandContentId: id + "-expand" }))),
            hasBulkActions && (react_1.default.createElement(core_1.TableCell, { padding: "checkbox" }, selectable && (react_1.default.createElement(core_1.Checkbox, { color: "primary", className: "select-item " + classes.checkbox, checked: selected, onClick: handleToggleSelection })))),
            react_1.default.Children.map(children, function (field, index) {
                return react_1.isValidElement(field) ? (react_1.default.createElement(DatagridCell_1.default, __assign({ key: id + "-" + (field.props.source || index), className: classnames_1.default("column-" + field.props.source, classes.rowCell), record: record }, { field: field, basePath: basePath, resource: resource }))) : null;
            })),
        expand && expanded && (react_1.default.createElement(core_1.TableRow, { key: id + "-expand", id: id + "-expand" },
            react_1.default.createElement(core_1.TableCell, { colSpan: nbColumns }, react_1.isValidElement(expand)
                ? react_1.cloneElement(expand, {
                    // @ts-ignore
                    record: record,
                    basePath: basePath,
                    resource: resource,
                    id: String(id),
                })
                : react_1.createElement(expand, {
                    record: record,
                    basePath: basePath,
                    resource: resource,
                    id: String(id),
                }))))));
});
DatagridRow.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.node,
    classes: prop_types_1.default.any,
    className: prop_types_1.default.string,
    // @ts-ignore
    expand: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType]),
    hasBulkActions: prop_types_1.default.bool.isRequired,
    hover: prop_types_1.default.bool,
    id: prop_types_1.default.any,
    onToggleItem: prop_types_1.default.func,
    // @ts-ignore
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    // @ts-ignore
    rowClick: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
    selected: prop_types_1.default.bool,
    style: prop_types_1.default.object,
    selectable: prop_types_1.default.bool,
};
DatagridRow.defaultProps = {
    hasBulkActions: false,
    hover: true,
    selected: false,
    selectable: true,
};
var areEqual = function (prevProps, nextProps) {
    var _1 = prevProps.children, _2 = prevProps.expand, prevPropsWithoutChildren = __rest(prevProps, ["children", "expand"]);
    var _3 = nextProps.children, _4 = nextProps.expand, nextPropsWithoutChildren = __rest(nextProps, ["children", "expand"]);
    return react_redux_1.shallowEqual(prevPropsWithoutChildren, nextPropsWithoutChildren);
};
exports.PureDatagridRow = react_1.memo(DatagridRow, areEqual);
exports.PureDatagridRow.displayName = 'PureDatagridRow';
exports.default = DatagridRow;
