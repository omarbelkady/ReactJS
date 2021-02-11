"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_final_form_1 = require("react-final-form");
var react_router_dom_1 = require("react-router-dom");
var i18n_1 = require("../i18n");
/**
 * Display a confirmation dialog if the form has unsaved changes.
 * - If the user confirms, the navigation continues and the changes are lost.
 * - If the user cancels, the navigation is reverted and the changes are kept.
 *
 * We can't use history.block() here because forms have routes, too (for
 * instance TabbedForm), and the confirm dialog would show up when navigating
 * inside the form. So instead of relying on route change detection, we rely
 * on unmount detection. The resulting UI isn't perfect, because when they
 * click the cancel button, users briefly see the page they asked before
 * seeing the form page again. But that's the best we can do.
 *
 * @see history.block()
 */
var useWarnWhenUnsavedChanges = function (enable) {
    var form = react_final_form_1.useForm();
    var history = react_router_dom_1.useHistory();
    var translate = i18n_1.useTranslate();
    // Keep track of the current location inside the form (e.g. active tab)
    var formLocation = react_1.useRef(history.location);
    react_1.useEffect(function () {
        formLocation.current = history.location;
    }, [history.location]);
    react_1.useEffect(function () {
        if (!enable) {
            window.sessionStorage.removeItem('unsavedChanges');
            return;
        }
        // on mount: apply unsaved changes
        var unsavedChanges = JSON.parse(window.sessionStorage.getItem('unsavedChanges'));
        if (unsavedChanges) {
            Object.keys(unsavedChanges).forEach(function (key) {
                return form.change(key, unsavedChanges[key]);
            });
            window.sessionStorage.removeItem('unsavedChanges');
        }
        // on unmount : check and save unsaved changes, then cancel navigation
        return function () {
            var formState = form.getState();
            if (formState.dirty &&
                (!formState.submitSucceeded ||
                    (formState.submitSucceeded &&
                        formState.dirtySinceLastSubmit))) {
                if (!window.confirm(translate('ra.message.unsaved_changes'))) {
                    var dirtyFields = formState.submitSucceeded
                        ? formState.dirtySinceLastSubmit
                        : formState.dirtyFields;
                    var dirtyFieldValues = Object.keys(dirtyFields).reduce(function (acc, key) {
                        acc[key] = formState.values[key];
                        return acc;
                    }, {});
                    window.sessionStorage.setItem('unsavedChanges', JSON.stringify(dirtyFieldValues));
                    history.push(formLocation.current);
                }
            }
            else {
                window.sessionStorage.removeItem('unsavedChanges');
            }
        };
    }, [translate]); // eslint-disable-line react-hooks/exhaustive-deps
};
exports.default = useWarnWhenUnsavedChanges;
