"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_final_form_1 = require("react-final-form");
var merge_1 = __importDefault(require("lodash/merge"));
/**
 * Restore the record values which should override any default values specified on the form.
 */
var useInitializeFormWithRecord = function (record) {
    var form = react_final_form_1.useForm();
    react_1.useEffect(function () {
        if (!record) {
            return;
        }
        var initialValues = form.getState().initialValues;
        var initialValuesMergedWithRecord = merge_1.default({}, initialValues, record);
        // Disable this option when re-initializing the form because in this case, it should reset the dirty state of all fields
        // We do need to keep this option for dynamically added inputs though which is why it is kept at the form level
        form.setConfig('keepDirtyOnReinitialize', false);
        // Since the submit function returns a promise, use setTimeout to prevent the error "Cannot reset() in onSubmit()" in final-form
        // It will not be necessary anymore when the next version of final-form will be released (see https://github.com/final-form/final-form/pull/363)
        setTimeout(function () {
            // Ignored until next version of final-form is released. See https://github.com/final-form/final-form/pull/376
            // @ts-ignore
            form.restart(initialValuesMergedWithRecord);
            form.setConfig('keepDirtyOnReinitialize', true);
        });
    }, [form, JSON.stringify(record)]); // eslint-disable-line react-hooks/exhaustive-deps
};
exports.default = useInitializeFormWithRecord;
