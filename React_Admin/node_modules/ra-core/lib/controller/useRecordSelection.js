"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var listActions_1 = require("../actions/listActions");
var defaultRecords = [];
/**
 * Get the list of selected items for a resource, and callbacks to change the selection
 *
 * @param resource The resource name, e.g. 'posts'
 *
 * @returns {Object} Destructure as [selectedIds, { select, toggle, clearSelection }].
 */
var useSelectItems = function (resource) {
    var dispatch = react_redux_1.useDispatch();
    var selectedIds = react_redux_1.useSelector(function (reduxState) {
        return reduxState.admin.resources[resource]
            ? reduxState.admin.resources[resource].list.selectedIds
            : defaultRecords;
    }, react_redux_1.shallowEqual);
    var selectionModifiers = {
        select: react_1.useCallback(function (newIds) {
            dispatch(listActions_1.setListSelectedIds(resource, newIds));
        }, [resource] // eslint-disable-line react-hooks/exhaustive-deps
        ),
        toggle: react_1.useCallback(function (id) {
            dispatch(listActions_1.toggleListItem(resource, id));
        }, [resource] // eslint-disable-line react-hooks/exhaustive-deps
        ),
        clearSelection: react_1.useCallback(function () {
            dispatch(listActions_1.setListSelectedIds(resource, []));
        }, [resource]),
    };
    return [selectedIds, selectionModifiers];
};
exports.default = useSelectItems;
