"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopOptimisticMode = exports.STOP_OPTIMISTIC_MODE = exports.startOptimisticMode = exports.START_OPTIMISTIC_MODE = exports.complete = exports.COMPLETE = exports.undo = exports.UNDO = exports.startUndoable = exports.UNDOABLE = void 0;
exports.UNDOABLE = 'RA/UNDOABLE';
exports.startUndoable = function (action) { return ({
    type: exports.UNDOABLE,
    payload: { action: action },
}); };
exports.UNDO = 'RA/UNDO';
exports.undo = function () { return ({
    type: exports.UNDO,
}); };
exports.COMPLETE = 'RA/COMPLETE';
exports.complete = function () { return ({
    type: exports.COMPLETE,
}); };
exports.START_OPTIMISTIC_MODE = 'RA/START_OPTIMISTIC_MODE';
exports.startOptimisticMode = function () { return ({
    type: exports.START_OPTIMISTIC_MODE,
}); };
exports.STOP_OPTIMISTIC_MODE = 'RA/STOP_OPTIMISTIC_MODE';
exports.stopOptimisticMode = function () { return ({
    type: exports.STOP_OPTIMISTIC_MODE,
}); };
