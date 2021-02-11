"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var react_redux_1 = require("react-redux");
var ra_core_1 = require("ra-core");
/**
 *@deprecated use BulkDeleteButton instead
 */
var BulkDeleteAction = function (props) {
    var dispatch = react_redux_1.useDispatch();
    var resource = ra_core_1.useResourceContext(props);
    react_1.useEffect(function () {
        if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.warn('<BulkDeleteAction> is deprecated. Use the <BulkDeleteButton> component instead, via the bulkActionButton props.');
        }
        var basePath = props.basePath, selectedIds = props.selectedIds, undoable = props.undoable, onExit = props.onExit;
        if (undoable) {
            dispatch(ra_core_1.startUndoable(ra_core_1.crudDeleteMany(resource, selectedIds, basePath)));
        }
        else {
            dispatch(ra_core_1.crudDeleteMany(resource, selectedIds, basePath));
        }
        onExit();
    }, [dispatch, props, resource]);
    return null;
};
BulkDeleteAction.propTypes = {
    basePath: prop_types_1.default.string,
    label: prop_types_1.default.string,
    onExit: prop_types_1.default.func.isRequired,
    resource: prop_types_1.default.string.isRequired,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
    translate: prop_types_1.default.func.isRequired,
    undoable: prop_types_1.default.bool,
};
BulkDeleteAction.defaultProps = {
    label: 'ra.action.delete',
    undoable: true,
};
exports.default = BulkDeleteAction;
