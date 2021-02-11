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
var React = __importStar(require("react"));
var react_1 = require("react");
var react_final_form_1 = require("react-final-form");
var final_form_arrays_1 = __importDefault(require("final-form-arrays"));
var useInitializeFormWithRecord_1 = __importDefault(require("./useInitializeFormWithRecord"));
var useWarnWhenUnsavedChanges_1 = __importDefault(require("./useWarnWhenUnsavedChanges"));
var sanitizeEmptyValues_1 = __importDefault(require("./sanitizeEmptyValues"));
var getFormInitialValues_1 = __importDefault(require("./getFormInitialValues"));
var react_redux_1 = require("react-redux");
var uiActions_1 = require("../actions/uiActions");
var FormContextProvider_1 = require("./FormContextProvider");
/**
 * Wrapper around react-final-form's Form to handle redirection on submit,
 * legacy defaultValue prop, and array inputs.
 *
 * Requires a render function, just like react-final-form
 *
 * @example
 *
 * const SimpleForm = props => (
 *    <FormWithRedirect
 *        {...props}
 *        render={formProps => <SimpleFormView {...formProps} />}
 *    />
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by Create or Edit)
 * @prop {Object} initialValues
 * @prop {Function} validate
 * @prop {Function} save
 * @prop {boolean} submitOnEnter
 * @prop {string} redirect
 * @prop {boolean} sanitizeEmptyValues
 *
 * @param {Props} props
 */
var FormWithRedirect = function (_a) {
    var debug = _a.debug, decorators = _a.decorators, defaultValue = _a.defaultValue, destroyOnUnregister = _a.destroyOnUnregister, form = _a.form, initialValues = _a.initialValues, initialValuesEqual = _a.initialValuesEqual, _b = _a.keepDirtyOnReinitialize, keepDirtyOnReinitialize = _b === void 0 ? true : _b, _c = _a.mutators, mutators = _c === void 0 ? final_form_arrays_1.default : _c, // FIXME see https://github.com/final-form/react-final-form/issues/704 and https://github.com/microsoft/TypeScript/issues/35771
    record = _a.record, render = _a.render, save = _a.save, saving = _a.saving, _d = _a.subscription, subscription = _d === void 0 ? defaultSubscription : _d, validate = _a.validate, validateOnBlur = _a.validateOnBlur, version = _a.version, warnWhenUnsavedChanges = _a.warnWhenUnsavedChanges, _e = _a.sanitizeEmptyValues, shouldSanitizeEmptyValues = _e === void 0 ? true : _e, props = __rest(_a, ["debug", "decorators", "defaultValue", "destroyOnUnregister", "form", "initialValues", "initialValuesEqual", "keepDirtyOnReinitialize", "mutators", "record", "render", "save", "saving", "subscription", "validate", "validateOnBlur", "version", "warnWhenUnsavedChanges", "sanitizeEmptyValues"]);
    var redirect = react_1.useRef(props.redirect);
    var onSave = react_1.useRef(save);
    var formGroups = react_1.useRef({});
    // We don't use state here for two reasons:
    // 1. There no way to execute code only after the state has been updated
    // 2. We don't want the form to rerender when redirect is changed
    var setRedirect = function (newRedirect) {
        redirect.current = newRedirect;
    };
    /**
     * A form can have several Save buttons. In case the user clicks on
     * a Save button with a custom onSave handler, then on a second Save button
     * without custom onSave handler, the user expects the default save
     * handler (the one of the Form) to be called.
     * That's why the SaveButton onClick calls setOnSave() with no parameters
     * if it has no custom onSave, and why this function forces a default to
     * save.
     */
    var setOnSave = react_1.useCallback(function (newOnSave) {
        typeof newOnSave === 'function'
            ? (onSave.current = newOnSave)
            : (onSave.current = save);
    }, [save]);
    var formContextValue = react_1.useMemo(function () { return ({
        setOnSave: setOnSave,
        getGroupFields: function (name) { return formGroups.current[name] || []; },
        registerGroup: function (name) {
            formGroups.current[name] = formGroups.current[name] || [];
        },
        unregisterGroup: function (name) {
            delete formGroups[name];
        },
        registerField: function (source, group) {
            if (group) {
                var fields = new Set(formGroups.current[group] || []);
                fields.add(source);
                formGroups.current[group] = Array.from(fields);
            }
        },
        unregisterField: function (source, group) {
            if (group) {
                if (!formGroups.current[group]) {
                    console.warn("Invalid form group " + group);
                }
                else {
                    var fields = new Set(formGroups.current[group]);
                    fields.delete(source);
                    formGroups.current[group] = Array.from(fields);
                }
            }
        },
    }); }, [setOnSave]);
    var finalInitialValues = getFormInitialValues_1.default(initialValues, defaultValue, record);
    var submit = function (values) {
        var finalRedirect = typeof redirect.current === undefined
            ? props.redirect
            : redirect.current;
        if (shouldSanitizeEmptyValues) {
            var sanitizedValues = sanitizeEmptyValues_1.default(finalInitialValues, values);
            return onSave.current(sanitizedValues, finalRedirect);
        }
        else {
            return onSave.current(values, finalRedirect);
        }
    };
    return (React.createElement(FormContextProvider_1.FormContextProvider, { value: formContextValue },
        React.createElement(react_final_form_1.Form, { key: version, debug: debug, decorators: decorators, destroyOnUnregister: destroyOnUnregister, form: form, initialValues: finalInitialValues, initialValuesEqual: initialValuesEqual, keepDirtyOnReinitialize: keepDirtyOnReinitialize, mutators: mutators, onSubmit: submit, subscription: subscription, validate: validate, validateOnBlur: validateOnBlur, render: function (formProps) { return (React.createElement(FormView, __assign({}, props, formProps, { record: record, setRedirect: setRedirect, saving: formProps.submitting || saving, render: render, save: save, warnWhenUnsavedChanges: warnWhenUnsavedChanges }))); } })));
};
var defaultSubscription = {
    submitting: true,
    pristine: true,
    valid: true,
    invalid: true,
};
var FormView = function (_a) {
    var render = _a.render, warnWhenUnsavedChanges = _a.warnWhenUnsavedChanges, setRedirect = _a.setRedirect, props = __rest(_a, ["render", "warnWhenUnsavedChanges", "setRedirect"]);
    // if record changes (after a getOne success or a refresh), the form must be updated
    useInitializeFormWithRecord_1.default(props.record);
    useWarnWhenUnsavedChanges_1.default(warnWhenUnsavedChanges);
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        dispatch(uiActions_1.setAutomaticRefresh(props.pristine));
    }, [dispatch, props.pristine]);
    var redirect = props.redirect, handleSubmit = props.handleSubmit;
    /**
     * We want to let developers define the redirection target from inside the form,
     * e.g. in a <SaveButton redirect="list" />.
     * This callback does two things: handle submit, and change the redirection target.
     * The actual redirection is done in save(), passed by the main controller.
     *
     * If the redirection target doesn't depend on the button clicked, it's a
     * better option to define it directly on the Form component. In that case,
     * using handleSubmit() instead of handleSubmitWithRedirect is fine.
     *
     * @example
     *
     * <Button onClick={() => handleSubmitWithRedirect('edit')}>
     *     Save and edit
     * </Button>
     */
    var handleSubmitWithRedirect = react_1.useCallback(function (redirectTo) {
        if (redirectTo === void 0) { redirectTo = redirect; }
        setRedirect(redirectTo);
        handleSubmit();
    }, [setRedirect, redirect, handleSubmit]);
    return render(__assign(__assign({}, props), { handleSubmitWithRedirect: handleSubmitWithRedirect }));
};
exports.default = FormWithRedirect;
