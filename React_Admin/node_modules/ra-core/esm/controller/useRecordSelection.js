import { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { setListSelectedIds, toggleListItem } from '../actions/listActions';
var defaultRecords = [];
/**
 * Get the list of selected items for a resource, and callbacks to change the selection
 *
 * @param resource The resource name, e.g. 'posts'
 *
 * @returns {Object} Destructure as [selectedIds, { select, toggle, clearSelection }].
 */
var useSelectItems = function (resource) {
    var dispatch = useDispatch();
    var selectedIds = useSelector(function (reduxState) {
        return reduxState.admin.resources[resource]
            ? reduxState.admin.resources[resource].list.selectedIds
            : defaultRecords;
    }, shallowEqual);
    var selectionModifiers = {
        select: useCallback(function (newIds) {
            dispatch(setListSelectedIds(resource, newIds));
        }, [resource] // eslint-disable-line react-hooks/exhaustive-deps
        ),
        toggle: useCallback(function (id) {
            dispatch(toggleListItem(resource, id));
        }, [resource] // eslint-disable-line react-hooks/exhaustive-deps
        ),
        clearSelection: useCallback(function () {
            dispatch(setListSelectedIds(resource, []));
        }, [resource]),
    };
    return [selectedIds, selectionModifiers];
};
export default useSelectItems;
