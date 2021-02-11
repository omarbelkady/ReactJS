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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPossibleReferences = exports.getPossibleReferenceValues = void 0;
var dataActions_1 = require("../../../actions/dataActions");
var initialState = {};
var possibleValuesreducer = function (previousState, action) {
    var _a, _b;
    if (previousState === void 0) { previousState = initialState; }
    switch (action.type) {
        case dataActions_1.CRUD_GET_MATCHING_SUCCESS:
            return __assign(__assign({}, previousState), (_a = {}, _a[action.meta.relatedTo] = action.payload.data.map(function (record) { return record.id; }), _a));
        case dataActions_1.CRUD_GET_MATCHING_FAILURE:
            return __assign(__assign({}, previousState), (_b = {}, _b[action.meta.relatedTo] = { error: action.error }, _b));
        default:
            return previousState;
    }
};
exports.getPossibleReferenceValues = function (state, props) {
    return state[props.referenceSource(props.resource, props.source)];
};
exports.getPossibleReferences = function (referenceState, possibleValues, selectedIds) {
    if (selectedIds === void 0) { selectedIds = []; }
    if (!possibleValues) {
        return null;
    }
    if (possibleValues.error) {
        return possibleValues;
    }
    var possibleValuesList = Array.from(possibleValues);
    selectedIds.forEach(function (id) {
        return possibleValuesList.some(function (value) { return value === id; }) ||
            possibleValuesList.unshift(id);
    });
    return (possibleValuesList
        // @ts-ignore
        .map(function (id) { return referenceState.data[id]; })
        .filter(function (r) { return typeof r !== 'undefined'; }));
};
exports.default = possibleValuesreducer;
