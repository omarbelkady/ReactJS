"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var listActions_1 = require("../actions/listActions");
/**
 * State-like hook for controlling the expanded state of a list item
 *
 * @param {string} resource The resource name, e.g. 'posts'
 * @param {string|integer} id The record identifier, e.g. 123
 *
 * @returns {Object} Destructure as [expanded, toggleExpanded].
 *
 * @example
 *
 * const [expanded, toggleExpanded] = useExpanded('posts', 123);
 * const expandIcon = expanded ? ExpandLess : ExpandMore;
 * const onExpandClick = () => toggleExpanded();
 */
var useExpanded = function (resource, id) {
    var dispatch = react_redux_1.useDispatch();
    var expandedList = react_redux_1.useSelector(function (reduxState) {
        return reduxState.admin.resources[resource]
            ? reduxState.admin.resources[resource].list.expanded
            : undefined;
    });
    var expanded = expandedList === undefined
        ? false
        : expandedList.map(function (el) { return el == id; }).indexOf(true) !== -1; // eslint-disable-line eqeqeq
    var toggleExpanded = react_1.useCallback(function () {
        dispatch(listActions_1.toggleListItemExpand(resource, id));
    }, [dispatch, resource, id]);
    return [expanded, toggleExpanded];
};
exports.default = useExpanded;
